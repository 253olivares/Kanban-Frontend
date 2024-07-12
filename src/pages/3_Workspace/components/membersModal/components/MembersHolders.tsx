import MemberItems from '../../headComponents/membersComponents/MembersHolder'
import scrollbarImage from '/assets/scrollBarTrack.png'


const MembersHolders = ({members}:{members:string[][]}) => {
  return (
    <div 
    // @ts-ignore
    style={{"--img":`url(${scrollbarImage})`}}
    className="
    w-full

    flex-grow

    max-h-[15.234rem]
    mobile:max-h-[30.212rem]
    sMobile:max-h-[32.5rem]
    mMobile:max-h-[39rem]

    boardsScroll

    flex
    flex-col

    gap-[0.468rem]
    mobile:gap-[0.625rem]
    sMobile:gap-[1rem]
    mMobile:gap-[1.2rem]
    ">
        {
            members.map(x=>
                <MemberItems key={x[0]} member={x} />
                )
        }
    </div>
  )
}

export default MembersHolders