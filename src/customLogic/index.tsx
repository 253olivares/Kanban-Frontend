import { board } from '../reduxStore/boards/boardsSlice';
import { comments } from '../reduxStore/comments/commentsSlice';
import { list } from '../reduxStore/lists/listsSlice';
import { task } from '../reduxStore/tasks/tasksSlice';
import {rememberUser, user} from '../reduxStore/users/userSlice';
import { workspace } from '../reduxStore/workspace/workspaceSlice';

export const rememberKey ='RememberUser';
export const boardKey = 'boardList';
export const commentKey = 'commentList';
export const listKey = 'listList';
export const taskKey = 'taskList';
export const userKey = 'userList';
export const workspaceKey = 'workspaceList';

export const getTask = ():task[] | null => {
    const data = localStorage.getItem(taskKey);
    if(!data){
        reloadApplication();
        return null;
    }
    return JSON.parse(data);
}

export const getList = ():list[] | null => {
    const data = localStorage.getItem(listKey);
    if(!data){
        reloadApplication();
        return null;
    }
    return JSON.parse(data);
};

export const getComments = ():comments[] | null => {
    const data = localStorage.getItem(commentKey);
    if(!data){
        reloadApplication();
        return null;
    }
    return JSON.parse(data);
};

export const removeBoardsFromWorkspaceLS = (boardsToRemove:string[]) => {
    const data = localStorage.getItem(boardKey);
    if(!data){
        reloadApplication();
        return;
    }
    const parsedData = JSON.parse(data);

    const updatedBoardList = parsedData.filter((x:board) => !boardsToRemove.includes(x.b_id));

    localStorage.setItem(boardKey,JSON.stringify(updatedBoardList));    
}

export const updateBoardNameFromWorkspaceLS = (boardId:string, boardName:string, prevStates:board[]) => {
    if(!localStorage.getItem(boardKey)){
        reloadApplication();
        return
    }
    console.log('From function to update Local storage:',boardName);

    const newArray = prevStates.map(b=> {
        if(b.b_id === boardId){
            return {
                ...b,
                name:boardName
            }
        }
        return b
    })
    localStorage.setItem(boardKey,JSON.stringify(newArray));
}

export const addBoard = (newBoard:board, prevState:board[]):void => {
    if(!localStorage.getItem(boardKey)) {
        reloadApplication();
        return;
    }
    localStorage.setItem(boardKey,JSON.stringify([...prevState,newBoard]))
}

export const getBoards = ():board[] | null => {
    const data = localStorage.getItem(boardKey);
    if(!data){
        reloadApplication();
        return null;
    }
    return JSON.parse(data);
}

export const getWorkspaces = ():workspace[] | null => {
    const data = localStorage.getItem(workspaceKey);
    if(!data){
        reloadApplication();
        return null;
    }
    return JSON.parse(data);
}

export const removeWorkspace = (id:string, state:workspace[]):void => {
    if(!localStorage.getItem(workspaceKey)){
        return;
    }    
    const newArray = state.filter(x => x.w_id !== id);
    localStorage.setItem(workspaceKey,JSON.stringify(newArray));
}

export const updateWorkspaceBoardLS = (updatedWorkspace:workspace, prevState:workspace[])=> {
    if(!localStorage.getItem(workspaceKey)){
        reloadApplication();
        return;
    }
    const newArray = prevState.map(w=> w.w_id === updatedWorkspace.w_id ? updatedWorkspace : w)
    localStorage.setItem(workspaceKey,JSON.stringify(newArray));
}

export const addWorkspace = (newWorkSpace:workspace ,prevState:workspace[]):void => {
    if(!localStorage.getItem(workspaceKey)) {
        reloadApplication();
        return;
    }
    localStorage.setItem(workspaceKey,JSON.stringify([...prevState, newWorkSpace]))
}

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


export const getUserFromList = (id:string):user|void => {
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

export const resetBackend = async() => {
    localStorage.removeItem(rememberKey);
    localStorage.removeItem(boardKey);
    localStorage.removeItem(commentKey);
    localStorage.removeItem(listKey);
    localStorage.removeItem(taskKey);
    localStorage.removeItem(userKey);
    localStorage.removeItem(workspaceKey);

    reloadApplication();
}

export const checkStorages= async():Promise<void> => {

    !localStorage.getItem(rememberKey)&& localStorage.setItem(rememberKey,JSON.stringify(null));
    !localStorage.getItem(boardKey)&& localStorage.setItem(boardKey,JSON.stringify([]));
    !localStorage.getItem(commentKey)&& localStorage.setItem(commentKey,JSON.stringify([]));
    !localStorage.getItem(listKey)&& localStorage.setItem(listKey,JSON.stringify([]));
    !localStorage.getItem(taskKey)&& localStorage.setItem(taskKey,JSON.stringify([]));
    !localStorage.getItem(userKey)&& localStorage.setItem(userKey,JSON.stringify({}));
    !localStorage.getItem(workspaceKey)&& localStorage.setItem(workspaceKey,JSON.stringify([]));

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

export function sanitize(string:string):string {
    // const map:Record<string,string> = {
    //     '&': '&amp;',
    //     '<': '&lt;',
    //     '>': '&gt;',
    //     '"': '&quot;',
    //     "'": '&#x27;',
    //     "/": '&#x2F;',
    //     "?": '&#63;',
    //     "$": "&#36;"
    // };
    // // // look for the following values
    // // // create an array of the values I want to search for and declare it as incase sensitive
    // // // and mark as a global search
    // const reg = /[&<>"'/?$ ]/ig;
    // // // replace each value as its found
    // return string.replace(reg, (match)=>(map[match]));

    // recently found out react does not need input sanitization
    // React automatically provides XSS protection preventing string example that would result in a xss attack
    

    // only time sanitization is needed is in instances where the user input needs to include html and not a string
   
    return string;
  }

  export function emailValidation (email:string):boolean {
    // email pattern
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // test it to see if it passes the check
    return pattern.test(email);
  }
