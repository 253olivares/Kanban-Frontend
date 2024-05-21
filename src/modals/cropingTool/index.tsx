import {motion} from 'framer-motion';

import ReactCrop, { makeAspectCrop, type Crop, centerCrop, convertToPixelCrop } from 'react-image-crop'

import SaveButton from './components/saveButton';
import CancelButton from './components/cancelButton';

import { getCroppingImage, setCroppingImageData } from '../../reduxStore/modal/modalSlice';
import { useAppDispatch, useAppSelector } from '../../reduxStore/hook';
import { useEffect, useRef, useState } from 'react';
import { setCropImage } from './components/setCanvasPreview';

const ASPECT_RATIO = 1;

const MIN_DIMENSTION = 100;

const index = ({setUserImage}: {setUserImage:(dataUrl:string)=>void}) => {
  
  const dispatch = useAppDispatch();

  // our refs we are creating to track elements for whenever element is being resized
  // we are doing this due to a bug with using our cropper tool and tailwind css
  // normally we shouldnt have any issues just setting height percentages and having css
  // resize our elements but bc for cropping tool it bugs and the image expands pass our element

  // image ref is for our image
  const imageRef = useRef<HTMLImageElement>(null);
  // canvas is for our canvas ref
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // controller keeps track of our controller elements
  const controlsRef = useRef<HTMLDivElement>(null);
  // this is our ref for our holder
  const imageHolderRef = useRef<HTMLDivElement>(null);
  // this is our ref for our entire element. This is what we are using to attach an event listener to our div
  // allow is to resize our elements when changes are detected
  const cropperRef = useRef<HTMLDivElement>(null);
  
  // grab our image from our state
  const cImage = useAppSelector(getCroppingImage);

  // create a crop state for our cropping tool
  const [crop, setCrop] = useState<Crop>();

  // get our extension of our file
  const getExtension = (fileName:string) => {
    // split file name at . extension
    const ext = fileName.split('.');
    return ext[ext.length - 1];
  }

  // return our extension and check if it matches any of our switch statements
  const checkIfImage = (fileName:string):boolean => {
    // return extension
    const extension =  getExtension(fileName);
    // check if it matches
    switch(extension){
      case 'jpg':
      case 'jpeg':
      case 'webp':
      case 'png':
        // return true if our file is of valid format
        return true
    }
    // else return false and let the user know they need to submit
    // a valid file 
    return false
  }

  const imageUploadedToImageTag = (e:React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if(!file) return;

    if(!checkIfImage(file.name)){
      alert('Please upload a valid image type: png, jpg, jpeg');
      return;
    }

    const reader = new FileReader();
    reader.addEventListener('load', ()=> {
      const imageElement = new Image();

      // return a string otherwise give us null to set our state.
      const imageURL = reader.result?.toString() || null;
      if(imageURL){
        imageElement.src = imageURL;
        imageElement.addEventListener("load", (e)=> {
          // @ts-ignore
          const {naturalWidth,naturalHeight} = e.currentTarget;

          if(naturalHeight < MIN_DIMENSTION || naturalWidth < MIN_DIMENSTION){
            alert('Image is too small. Must be at least 100px by 100px');
            return
          }
        })
      } 
      dispatch(setCroppingImageData(imageURL));
    });

    reader.readAsDataURL(file);
  }

  const onImageLoad = (e:React.SyntheticEvent<HTMLImageElement, Event>) => {
    const {width, height} = e.currentTarget;

    const cropWidthInPercent = (MIN_DIMENSTION / width) * 100;

    const crop = makeAspectCrop(
      {
      unit:'%',
      width: cropWidthInPercent,
      },
      ASPECT_RATIO,
      width,
      height
    )
    const centeredCrop = centerCrop(crop,width,height);


    setCrop(centeredCrop);
  }

  const cropImage = () => {
    // make sure we have all these properties
    if(imageRef.current && canvasRef.current && crop) {
      setCropImage(
        imageRef.current,
        canvasRef.current,
        convertToPixelCrop(
          crop,
          imageRef.current.width,
          imageRef.current.height
          )
      );
      const dataURL = canvasRef.current.toDataURL();
      
      setUserImage(dataURL);
    } else {
      alert('Please make sure a provide an image to crop first.');
    }
  }

  // This use effect only exists to set our image when it loads
  // since our image loading does not set off our resize observer 
  // we want to run this code separately when it first loads
  useEffect(()=> {
    if(imageHolderRef.current && imageRef.current){
      const controlsHeight = imageHolderRef.current.offsetHeight;
      imageRef.current.style.maxHeight = `${controlsHeight}px`;
    }
  },[cImage])

  useEffect(()=> {
   let prevHeight = 0;

  //  function to change our element heights
  // since its all refs no need to update on each react render
   const setHeights = () => {
    if(controlsRef.current && imageHolderRef.current && cropperRef.current){
      const controlsHeight = controlsRef.current.offsetHeight;
      imageHolderRef.current.style.height = `${cropperRef.current.offsetHeight - controlsHeight}px`;
    }
    if(imageHolderRef.current && imageRef.current){
      const controlsHeight = imageHolderRef.current.offsetHeight;
      imageRef.current.style.maxHeight = `${controlsHeight}px`;
    }
   }

   const observer = new ResizeObserver(entries=> {
    for( const entry of entries){
      const height = entry.contentRect.height;
      // only run our function when our height changes
      if(typeof height === 'number' && height !== prevHeight){
      
        setHeights();
        // set our height for checking when it changes
        prevHeight = height;
      }
    }
   });

   if(cropperRef.current){
    observer.observe(cropperRef.current);
   }
   return ()=>{
    // disconnect our observer when we unload our component
    if(observer){
      observer.disconnect();
    }
   }
  },[])

  return (
    <motion.div
    initial={{
        opacity:0,
        y:25
    }}
    animate={{
        opacity:1,
        y:0
    }}
    exit={{
        opacity:0,
        y:25
    }}
    transition={{
      duration:.3
    }}
    ref={cropperRef}
    aria-modal="true"
    className="
    fixed
    sLaptop:absolute
    top-0
    left-0
    z-[20]

    bg-SpaceBlue  

    w-screen
    h-screen
    sLaptop:w-full
    sLaptop:h-full

    flex flex-col
    justify-between

    overflow-y-scroll 
    no-scrollbar 
    sLaptop:overflow-hidden
    ">
        <div 
        ref={imageHolderRef}
        className={
          `
          flex 
          items-center 
          justify-center
          w-full
          ${ cImage ? ` bg-black`:`bg-SpaceBlue`}
          `}>
          {  cImage ?
             <ReactCrop 
             crop={crop}
             circularCrop
             keepSelection
             aspect={ASPECT_RATIO}
             minWidth={MIN_DIMENSTION}
             minHeight={MIN_DIMENSTION}
             onChange={(_,percentCrop)=>setCrop(percentCrop)}>
              <img 
              ref={imageRef}
              className='womp'
              src={cImage} alt="Crop_Image" onLoad={onImageLoad}/>
             </ReactCrop>
            :
            <label className='
            text-white

            font-bold
            
            text-[]
            mobile:text-[]
            sMobile:text-[1.5rem]
            mMobile:text-[]
            sLaptop:text-[0.799rem]
            mLaptop:text-[0.999rem]
            desktop:text-[1.2rem]
            largeDesktop:text-[1.5rem]

            py-[]
            mobile:py-[]
            sMobile:py-[10rem]
            mMobile:py-[]

            sLaptop:py-[5.333rem]
            mLaptop:py-[6.666rem]
            desktop:py-[8rem]
            largeDesktop:py-[10rem]

            rounded-[]
            mobile:rounded-[]
            sMobile:rounded-[1.25rem]
            mMobile:rounded-[]

            sLaptop:rounded-[1.066rem]
            mLaptop:rounded-[1.333rem]
            desktop:rounded-[1.6rem]
            largeDesktop:rounded-[2rem]

            px-[7.5%]
            sLaptop:px-[5%]

            border-dashed
            
            border-[]
            mobile:border-[]
            sMobile:border-[0.3rem]
            mMobile:border-[]
            sLaptop:border-[0.239rem]
            mLaptop:borer-[0.299rem]
            desktop:border-[0.36rem]
            largeDesktop:border-[.45rem]

            sLaptop:hover:cursor-pointer
            sLaptop:hover:bg-SpaceBlueSelected

            border-white
            text-center

            transition-all
            duration-200 
            ' htmlFor="ImageSubmission">
              Click to add an Image to crop
            </label>
          }
        </div>
        <div
        ref={controlsRef}
        className='
        flex flex-col        
        '>
          <div className='
          flex 
          justify-center
          items-center
        
          h-[3.632rem]
          mobile:h-[4.843rem]
          sMobile:h-[7.75rem]
          mMobile:h-[9.3rem]
          sLaptop:h-[3.733rem]
          mLaptop:h-[4.666rem]
          desktop:h-[5.6rem]
          largeDesktop:h-[7rem]
          '>
            {
              !cImage ?
              <label 
              className='
              relative

              z-[30]
            
              text-white
              bg-SelectorBlue
              font-bold
              
              rounded-[0.140rem]
              mobile:rounded-[0.187rem]
              sMobile:rounded-[.3rem]
              mMobile:rounded-[0.36rem]
              sLaptop:rounded-[0.24rem]
              mLaptop:rounded-[0.3rem]
              desktop:rounded-[0.36rem]
              largeDesktop:rounded-[0.45rem]

              px-[0.656rem]
              mobile:px-[0.875rem]
              sMobile:px-[1.4rem]
              mMobile:px-[1.68rem]
              sLaptop:px-[1.066rem]
              mLaptop:px-[1.333rem]
              desktop:px-[1.6rem]
              largeDesktop:px-[2rem]

              text-[0.773rem]
              leading-[1.289rem]
              mobile:text-[1.031rem]
              mobile:leading-[1.718rem]
              sMobile:text-[1.65rem]
              sMobile:leading-[2.75rem]
              mMobile:text-[1.98rem]
              mMobile:leading-[3.3rem]
              sLaptop:text-[0.799rem]
              sLaptop:leading-[1.733rem]
              mLaptop:text-[0.999rem]
              mLaptop:leading-[2.166rem]
              desktop:text-[1.2rem]
              desktop:leading-[2.6rem]
              largeDesktop:text-[1.5rem]
              largeDesktop:leading-[3.25rem]

              h-[1.289rem]
              mobile:h-[1.718rem]
              sMobile:h-[2.75rem]
              mMobile:h-[3.3rem]
              sLaptop:h-[1.733rem]
              mLaptop:h-[2.166rem]
              desktop:h-[2.6rem]
              largeDesktop:h-[3.25rem]

              sLaptop:hover:opacity-75
              sLaptop:hover:cursor-pointer  
              transition-all
              duration-300
            
              '
              htmlFor="ImageSubmission">
                Submit New Image
              </label>
              :
              ''
            }
            <input 
              id='ImageSubmission' 
              type="file" 
              accept='image/*'
              onChange={imageUploadedToImageTag}
              className='hidden'
              />
          </div>
          <div className='
          flex 
          justify-between
        
          px-[8%]
          sLaptop:px-[7.5%]
        
          pb-[0.867rem]
          mobile:pb-[1.156rem]
          sMobile:pb-[1.85rem]
          mMobile:pb-[2.22rem]
          sLaptop:pb-[1.333rem] 
          mLaptop:pb-[1.666rem]     
          desktop:pb-[2rem]
          largeDesktop:pb-[2.5rem]
          '>
            <CancelButton/>
            <SaveButton fn={()=>cropImage()}/>
          </div>
        </div>
        {/* this is our canvas that creates our crop when we save
        // when the user clicks the save button it grabs our canvas ref and turns it into 
        // a data url
        */}
        {
            cImage &&
            <canvas
            ref={canvasRef}
            className='hidden'
            style={{
              objectFit : 'contain',
              width:100,
              height:100
            }}
            ></canvas>
          }
    </motion.div>
  )
}

export default index