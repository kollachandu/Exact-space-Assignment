import "./index.css"
import { useState } from "react"
import {FaSmile} from "react-icons/fa"
import {MdSend} from "react-icons/md"
import Picker from 'emoji-picker-react';
import {v4 as uuidv4} from "uuid"

const Footer = () =>{
    const [inputStr,setInput] = useState("")
    const [messageList,setmsgList] = useState([{
        id : uuidv4(),
        inputStr : "Welcome to Tea Chat. Send a message now to start interacting with other users in the app.",
        randomName: "PubNub Bot",
        letter:"PU",
        msgTime: "12:16"
    },{
        id : uuidv4(),
        inputStr : "Hey everyone!",
        randomName: "Gregory Goolsby",
        letter:"GG",
        msgTime: "4:46"
    }
])
    const [showPicker,setShowPicker] = useState(false)
    const onEmojiClick = (emojiObject,event) =>{
        setInput(prevState=> prevState + emojiObject.emoji);
        setShowPicker(false)
    }
    const date = new Date()
    const msgTime = date.getHours() + ":" + date.getMinutes()
    const names = ["Alan","Bob","Carol","Dean","Elin"]
    var randomName = names[~~(Math.random()*names.length)]
    var letter = randomName[0]+randomName[1].toUpperCase()
    
    const onAddmsg = event=>{
        event.preventDefault()
        const msgObject = {
            id : uuidv4(),
            inputStr,
            randomName,
            letter,
            msgTime
        }
        setmsgList(prevState=>[...prevState,msgObject])
        setInput("")
    }
    
    return (
        <>
            <ul className="message-container">
            {messageList.map(each=>(
                <li className="msg-box">
                    <div className="msg-logo"><p className="msg-logo-txt">{each.letter}</p></div>
                    <div>
                        <div className="time">
                            <h4 className="person">{each.randomName}</h4>
                            <p>{each.msgTime}</p>
                        </div>
                        
                        <div className="msg">
                            <p className="text-msg">{each.inputStr}</p>
                        </div>
                    </div>
                </li>
            ))}
            </ul>
            <div className="picker">{showPicker && <Picker 
            onEmojiClick={onEmojiClick} />}</div>
            <form className="input-container" onSubmit={onAddmsg}>
                <input className="input-box" type="text" placeholder="Enter a Message" 
                value = {inputStr}
                onChange = {(event)=>setInput(event.target.value)} />
                <button type="submit"><MdSend className="smile" /></button>
                <FaSmile className="smile" onClick={() => setShowPicker(val=>!val)} />
            </form>
            
        </>
    
    )
}

    


export default Footer