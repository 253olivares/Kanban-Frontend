import {rememberUser, user} from '../reduxStore/users/userSlice';

export const rememberKey ='RememberUser';
export const boardKey = 'boardList';
export const commentKey = 'commentList';
export const listKey = 'listList';
export const taskKey = 'taskList';
export const userKey = 'userList';
export const workspaceList = 'workspaceList';

export const setRemember = (user:user):void => {
    if(!localStorage.getItem(rememberKey)) {
        reloadApplication();
        return;
    }

    const rememberData = {
        rememberDate : (new Date).toLocaleString(),
        userId : user.u_id,
        email:user.email,
        password:user.password
    }
    
    localStorage.setItem(rememberKey,JSON.stringify(rememberData));
}

export const getRemember = async ():Promise<rememberUser | null> => {
    const data = localStorage.getItem(rememberKey);
    if(!data){
        reloadApplication();
        return null;
    }

    const rememberUser = JSON.parse(data);
    return rememberUser;
}

export const getUserFromList = async (id:string):Promise<user|void> => {
    const data = localStorage.getItem(userKey);
    if(!data){
        reloadApplication();
        return;
    }
    const users:Record<string,user> = JSON.parse(data);

    return users[id];
}

export const searchUser = (email:string,password:string):user|null => {
    
    let user = null;
    const data = localStorage.getItem(userKey);

    if(!data){
        reloadApplication();
        return null;
    }
    
    const users:Record<string,user> = JSON.parse(data); 

    for(const[_,value] of Object.entries(users)){
        if(value.email.toUpperCase() === email.toUpperCase() && 
            password === value.password){
                user = value;
                break;
        }
    }

    return user;
}

export const resetRemember = () => {
    // if(!localStorage.getItem(storageKey)) reloadApplication();
    localStorage.setItem(rememberKey,JSON.stringify(null));
}

export const updateUser = (newUserInfo:user):void => {

    const data = localStorage.getItem(userKey);

    if(!data){
        reloadApplication();
        return;
    }

    let users:Record<string,user> = JSON.parse(data);
    users[newUserInfo.u_id] = newUserInfo;

    localStorage.setItem(userKey,JSON.stringify(users));
}

export const addUser = (newUser:user):void => {

    const data = localStorage.getItem(userKey);

    if(!data){
        reloadApplication();
        return;
    }
    let users:Record<string,user> = JSON.parse(data);
    users[newUser.u_id] = newUser;

    localStorage.setItem(userKey,JSON.stringify(users));
}

export const checkIfEmailExists = (email:string):boolean | null => {
    const data = localStorage.getItem(userKey);
    
    // shorten code previously tp make easier to read by removing any unneeded code 
    if(!data){
        reloadApplication();
        return null
    }

    const users:Record<string,user> = JSON.parse(data);

    let match = false;
    for(const[_,value] of Object.entries(users)){
        if(value.email.toUpperCase()=== email.toUpperCase()){
            match = true;
            // Stop our loop we are done searching
            break;
        }
    }
    return match
}

// this is an adjusted email checker for when user edits their password
// this takes two params with the second param being the email the user already had
export const checkIfEmailExistsEdit = (email:string,prevEmail:string):boolean | null => {
    const data = localStorage.getItem(userKey);

    if(!data){
        reloadApplication();
        return null
    }

    const users:Record<string,user> = JSON.parse(data);
    let match = false;
    for(const [_,value] of Object.entries(users)){
        if(value.email.toUpperCase() === email.toUpperCase() && 
        value.email.toUpperCase() !== prevEmail.toUpperCase()){
            match = true;
        }
    }

    return match;
}

export const checkStorages= async():Promise<void> => {

    !localStorage.getItem(rememberKey)&& localStorage.setItem(rememberKey,JSON.stringify(null));
    !localStorage.getItem(boardKey)&& localStorage.setItem(boardKey,JSON.stringify({}));
    !localStorage.getItem(commentKey)&& localStorage.setItem(commentKey,JSON.stringify({}));
    !localStorage.getItem(listKey)&& localStorage.setItem(listKey,JSON.stringify({}));
    !localStorage.getItem(taskKey)&& localStorage.setItem(taskKey,JSON.stringify({}));
    !localStorage.getItem(userKey)&& localStorage.setItem(userKey,JSON.stringify({}));
    !localStorage.getItem(workspaceList)&& localStorage.setItem(workspaceList,JSON.stringify({}));

}


export const reloadApplication = ()=> {
    alert('Application has ran into an issue where database does not exist. Application will reload!');
    location.reload();
}

// export const passwordEncrption = (password:string):string => {
//     return bcrypt.hashSync(password, encryptionKey); 
// }

// export const checkPasswordMatch = async (password:string,encryption:string):Promise<boolean> => {
//     return await bcrypt.compareSync(password, encryption);
// }

// custom function to create a image for our user
export const createDefaultBaseImage = (firstLetter:string,lastLetter:string):string|null => {
    // create a canvas
    const canvas = document.createElement("canvas");

    // set a canvas image
    canvas.width = 600;
    canvas.height = 600;

    // create 2d context
    const ctx = canvas.getContext("2d");
    // make sure our context exists
    if(!ctx) return null
    // draw our background
    const gradient = ctx.createConicGradient(0, 600 * 0.45, 600 * -0.02);

    gradient.addColorStop(0, "#69168F");
    gradient.addColorStop(0.55, "#0A2E72");
    gradient.addColorStop(1, "#144BB1");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // draw an overlay that will sit on top of our background
    ctx.fillStyle = "rgb(0 0 0 / 25%)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // draw the text based on the users name provided
    // function takes in the first letter of users first name and first letter of users last name
    // to create a icon
    // default font styling for our text
    ctx.font = "bold 250px Ubuntu";
    // center our text on the canvas
    ctx.textAlign = "center";
    // center our baseline
    ctx.textBaseline = "middle";
    // provide a gradient
    var gradientText = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradientText.addColorStop(0, "#F44730");
    gradientText.addColorStop(1, "#F4A154");
    ctx.fillStyle = gradientText;
    // add our text
    ctx.fillText(`${firstLetter}${lastLetter}`, canvas.width / 2, canvas.height / 2);

    // convert our canvas to a data url of png type
    var dataURL = canvas.toDataURL("image/png");

    // just for testing
    // localStorage.setItem("imageTest", JSON.stringify(dataURL));

    // return our base 64 code of our image
    // remove beginning section of the data url so we only
    // have the image data itself
    return dataURL;
}
