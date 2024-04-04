
const index = () => {
  return (
    <section className="conic-gradient">
        {/* back to top section */}
        <div className="
        cursor-pointer
        py-4
        w-full 
        text-center 
        text-2xl
        font-medium 
        text-PrimaryWhite
        "
        onClick={()=> {window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          })}}
        >
            Back To Top
        </div>

          {/* middle section */}
        <div className="min-h-[250px] w-full linear-gradientFooter">
          {/* <div className="max-w-[1920px]">
            <div className="bg-PrimaryWhite block w-[60%] h-full min-h-[250px] rounded-r-[2.5rem]">
              test
            </div>
          </div> */}
        </div>

        {/* copyright info */}
        <div className="w-full max-w-[1920px] flex min-h-[75px]">

        </div>
    </section>
  )
}

export default index