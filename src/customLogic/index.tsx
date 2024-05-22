import {user} from '../reduxStore/users/userSlice';
import bcrypt from 'bcryptjs';

const encryptionKey = '$2a$10$CwTycUXWue0Thq9StjUM0u';

export const setRemember = (user:user) => {
    const storageKey = 'KanBanServerInstance';
    const data = localStorage.getItem(storageKey);
    if(data) {
        const loginDate = new Date;
        const rememberData = {
            rememberDate : loginDate.toLocaleString(),
            userId : user.u_id,
            email:user.email,
            password:user.password
        }
        const newData = {...JSON.parse(data),RememberUser:rememberData}
        localStorage.setItem(storageKey,JSON.stringify(newData));
    } else {
        reloadApplication();
    }
}

export const getRemember = () => {
    const storageKey = 'KanBanServerInstance';
    const data = localStorage.getItem(storageKey);
    if(data){
        const rememberStatus = JSON.parse(data).RememberUser;
        return rememberStatus;
    } else {
        reloadApplication();
        return false;
    }
}

export const getUserFromList = (id:string) => {
    const storageKey = 'KanBanServerInstance';
    const data = localStorage.getItem(storageKey);
    if(data) {
        const users:Record<string,user> = JSON.parse(data).userList;
        if(users){
           return users[id];
        } else {
            console.log('userlist is missing')
        }
    } else {
        reloadApplication();
    }
}

export const searchUser = (email:string,password:string)=> {
    const storageKey = 'KanBanServerInstance';
    let user = null;
    const data = localStorage.getItem(storageKey);
    if(data) {
        const users:Record<string,user> = JSON.parse(data).userList; 
        if(Object.keys(users).length >= 1) {
            for(const [_, value] of Object.entries(users)){
                console.log(value.email);
                if(value.email.toUpperCase() === email.toUpperCase()){
                    if(checkPasswordMatch(password,value.password)){
                        user = value;
                    }
                }
            }
        }
    } else {
        reloadApplication();
    }
    return user
}

export const resetRemember = () => {
    const storageKey = 'KanBanServerInstance';
    const data = localStorage.getItem(storageKey);
    if(data) {
        const newData = {...JSON.parse(data),RememberUser:null}
        localStorage.setItem(storageKey,JSON.stringify(newData));
    } else {
        reloadApplication();
    }
}

export const updateUser = (newUserInfo:user) => {
    const storageKey = 'KanBanServerInstance';
    const data = localStorage.getItem(storageKey);
    if(data){
        let users:Record<string,user> = JSON.parse(data).userList;
        users[newUserInfo.u_id] = newUserInfo;
        const newData = {...JSON.parse(data), userList:users};
        localStorage.setItem(storageKey,JSON.stringify(newData));
    } else {
        reloadApplication();
    }
}

export const addUser = (newUser:user) => {
    const storageKey = 'KanBanServerInstance';
    const data = localStorage.getItem(storageKey);
    if(data) {
        let users:Record<string,user> = JSON.parse(data).userList;
        users[newUser.u_id] = newUser;
        const newData = {...JSON.parse(data),userList:users};
        localStorage.setItem(storageKey,JSON.stringify(newData));
    } else {
        reloadApplication();
    }
}

export const checkIfEmailExists = (email:string):boolean | null => {
    const storageKey = 'KanBanServerInstance';
    const data = localStorage.getItem(storageKey);
    if(data) {
        const users:Record<string,user> = JSON.parse(data).userList;
        let match = false;
        if(Object.keys(users).length >=1) {
            for (const [_, value] of Object.entries(users)) {
                if (value.email.toUpperCase() === email.toUpperCase()) {
                    match = true;
                }
              }
        }
        return match
    } else {
        reloadApplication();
        return null
    }
}

// this is an adjusted email checker for when user edits their password
// this takes two params with the second param being the email the user already had
export const checkIfEmailExistsEdit = (email:string,prevEmail:string):boolean | null => {
    const storageKey = 'KanBanServerInstance';
    const data = localStorage.getItem(storageKey);
    if(data) {
        const users:Record<string,user> = JSON.parse(data).userList;
        let match = false;
        if(Object.keys(users).length >=1) {
            for (const [_, value] of Object.entries(users)) {
                if (value.email.toUpperCase() === email.toUpperCase() && value.email.toUpperCase() !== prevEmail.toUpperCase()) {
                    match = true;
                }
            }
        }
        return match
    } else {
        reloadApplication();
        return null
    } 
}

export const reloadApplication = ()=> {
    alert('Application has ran into an issue where database does not exist. Application will reload!');
    location.reload();
}

export const passwordEncrption = (password:string):string => {
    return bcrypt.hashSync(password, encryptionKey); 
}

export const checkPasswordMatch = (password:string,encryption:string):boolean => {
    return bcrypt.compareSync(password, encryption);
}

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

export function toggleModal() {
    let offset;
    if (document.body.classList.contains('modal--opened')) {
        offset = parseInt(document.body.style.top, 10);
        document.body.classList.remove('modal--opened');
        document.body.scrollTop = (offset * -1);
    } else {
        offset = document.body.scrollTop;
        document.body.style.top = (offset * -1) + 'px';
        document.body.classList.add('modal--opened');
    }
}