import { getUserFromList } from "../../../../../customLogic";


const MembersHolder = ({member}:{member:string[]}) => {

  const user = getUserFromList(member[0])
  const role = member[1];

  console.log(user);
  console.log(role);
  
  return (
    <div className="
    w-full
    ">

    </div>
  )
}

export default MembersHolder