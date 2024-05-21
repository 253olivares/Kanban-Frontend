import {motion} from 'framer-motion';

import ReactCrop, { makeAspectCrop, type Crop, centerCrop, convertToPixelCrop } from 'react-image-crop'

import SaveButton from './components/saveButton';
import CancelButton from './components/cancelButton';

import { getCroppingImage, setCroppingImageData } from '../../reduxStore/modal/modalSlice';
import { useAppDispatch, useAppSelector } from '../../reduxStore/hook';
import { useRef, useState } from 'react';
import { setCropImage } from './components/setCanvasPreview';

const ASPECT_RATIO = 1;

const MIN_DIMENSTION = 100;

const index = ({setUserImage}: {setUserImage:(dataUrl:string)=>void}) => {
  
  const dispatch = useAppDispatch();

  const imageRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const cImage = useAppSelector(getCroppingImage);

  const [crop, setCrop] = useState<Crop>();

  const getExtension = (fileName:string) => {
    const ext = fileName.split('.');
    return ext[ext.length - 1];
  }

  const checkIfImage = (fileName:string):boolean => {
    const extension =  getExtension(fileName);
    switch(extension){
      case 'jpg':
      case 'jpeg':
      case 'webp':
      case 'png':
        return true
    }
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
    aria-modal="true"
    className="
    absolute
    z-[20]

    bg-SpaceBlue  

    w-full
    h-full
    max-h-[full]

    flex flex-col

    overflow-y-scroll 
    no-scrollbar 
    sLaptop:overflow-hidden
    ">
        <div 
        className={
          `
          flex 
          items-center 
          justify-center
          w-full
          sLaptop:h-[21.246rem]
          mLaptop:h-[26.158rem]
          desktop:h-[31.132rem]
          largeDesktop:h-[37.166rem]
          ${
            cImage ? 
            `
            bg-black
            `
            :
            `
            bg-SpaceBlue
            `
          }
          `
        }>
          {
            cImage ?
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
              className='
              object-contain
              sLaptop:h-[21.246rem]
              mLaptop:h-[26.158rem]
              desktop:h-[31.132rem]
              largeDesktop:h-[37.166rem]
              '
              src={cImage} alt="Crop_Image" onLoad={onImageLoad}/>
             </ReactCrop>
            :
            <label className='
            text-white

            font-bold
            
            text0p
            mobile:text-[]
            sMobile:text-[]
            mMobile:text-[2.25rem]
            sLaptop:text-[0.799rem]
            mLaptop:text-[0.999rem]
            desktop:text-[1.2rem]
            largeDesktop:text-[1.5rem]

            py-[]
            mobile:py-[]
            sMobile:py-[]
            mMobile:py-[12rem]

            sLaptop:py-[5.333rem]
            mLaptop:py-[6.666rem]
            desktop:py-[8rem]
            largeDesktop:py-[10rem]

            rounded-[]
            mobile:rounded-[]
            sMobile:rounded-[]
            mMobile:rounded-[1.25rem]

            sLaptop:rounded-[1.066rem]
            mLaptop:rounded-[1.333rem]
            desktop:rounded-[1.6rem]
            largeDesktop:rounded-[2rem]

            px-[7.5%]
            sLaptop:px-[5%]

            border-dashed
            
            border-[]
            mobile:border-[]
            sMobile:border-[]
            mMobile:border-[0.3rem]
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
        <div className='
        flex flex-col        
        '>
          <div className='
          flex justify-center
          items-center
          sLaptop:h-[3.733rem]
          mLaptop:h-[4.666rem]
          desktop:h-[5.6rem]
          largeDesktop:h-[7rem]
          '>
            {
              cImage ?
              <label 
              className='
              relative

              z-[30]
            
              text-white
              bg-SelectorBlue
              font-bold
              
              sLaptop:rounded-[0.24rem]
              mLaptop:rounded-[0.3rem]
              desktop:rounded-[0.36rem]
              largeDesktop:rounded-[0.45rem]

              sLaptop:px-[1.066rem]
              mLaptop:px-[1.333rem]
              desktop:px-[1.6rem]
              largeDesktop:px-[2rem]

              sLaptop:text-[0.799rem]
              sLaptop:leading-[1.733rem]
              mLaptop:text-[0.999rem]
              mLaptop:leading-[2.166rem]
              desktop:text-[1.2rem]
              desktop:leading-[2.6rem]
              largeDesktop:text-[1.5rem]
              largeDesktop:leading-[3.25rem]

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
        
          px-[7.5%]
        
          sLaptop:pb-[1.333rem] 
          mLaptop:pb-[1.666rem]     
          desktop:pb-[2rem]
          largeDesktop:pb-[2.5rem]
          '>
            <CancelButton/>
            <SaveButton fn={()=>cropImage()}/>
          </div>
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
        </div>
    </motion.div>
  )
}

export default index