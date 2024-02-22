import React, { useState } from 'react' 

import logo from "../assets/images/logo.png";

const NamePage = () => {
    const [name, setName] = useState("")
    const [roomName, setRoomName] = useState("")
    const [chat, setChat] = useState("")
    const [display, setDisplay] = useState("page-start")

    const _setDisplayType = (type) => {
        setDisplay(type)
    }

    const _pageStartRoom = () => {
        return <div className="container">
            <div className='title'>
                ชื่อของคุณ
            </div>
            <div className='c-input-name'>
                <input 
                    type='text'
                    className='input-name'
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                />
            </div>
            {name !== '' &&
                <div className='c-button-submit'>
                    <button type="button" onClick={()=> _setDisplayType("page-select-room")} className='button button-submit'>ยืนยัน</button>
                </div>
            }
        </div>
    }

    const _pageSelectRoom = () => {
        return <div className="container">
            <div className='title'>
                คุณ {name}
            </div>
                <div className='c-button-create-room'>
                    <button type="button" onClick={()=> _setDisplayType("page-create-room")} className='button button-create'>สร้างห้องใหม่</button>
                </div>
                <div className='c-button-join-room'>
                    <button type="button" onClick={()=> _setDisplayType("page-join-room")} className='button button-join'>เข้าร่วมแชท</button>
                </div>
        </div>
    }

    const _pageCreateRoom = () => {
        return <div className="container">
            <div className='title'>
                สร้างห้องใหม่
            </div>
            <div className='c-input-name'>
                <input 
                    type='text'
                    className='input-name'
                    value={roomName}
                    onChange={(e)=> setRoomName(e.target.value)}
                />
            </div>
            <div className='c-create-page'>
                <div className=''>
                    <button type="button" onClick={()=> _setDisplayType("page-select-room")} className='button button-back'>กลับ</button>
                </div>
                <div className='c-button-create-room'>
                    <button type="button" onClick={()=> _setDisplayType("page-chat-room")} className='button button-create-submit'>ยืนยัน</button>
                </div>
            </div>
        </div>
    }

    const _pageJoinRoom = () => {
        return <div className="container">
            <div className='title'>
                เข้าร่วมแชท
            </div>
            <div className='c-input-name'>
                <input 
                    type='text'
                    className='input-name'
                    value={roomName}
                    onChange={(e)=> setRoomName(e.target.value)}
                />
            </div>
            <div className='c-create-page'>
                <div className=''>
                    <button type="button" onClick={()=> _setDisplayType("page-select-room")} className='button button-back'>กลับ</button>
                </div>
                <div className='c-button-create-room'>
                    <button type="button" onClick={()=> _setDisplayType("page-chat-room")} className='button button-create-submit'>เข้าร่วม</button>
                </div>
            </div>
        </div>
    }

    const _chatRoom = () => {
        return <div className="container">
            <div className='title-chat-name'>
                ห้อง {roomName}
            </div>
            <div className='c-chat-content'> 
                <div className='c-chat-username'>
                    <span>คุณ {name}</span>
                </div>
                <div className='c-chat-message'>
                    สวัสดี
                </div>
            <div className='c-input-chat'>
                <input 
                    type='text'
                    className='input-chat'
                    placeholder="Enter เพื่อส่ง"
                    value={chat}
                    onChange={(e)=> setChat(e.target.value)}
                />
            </div>
            </div>
        </div>
    }

  return (
    <div className='chat-main'>
        <div className='logo-head'>
            <img src={logo} className="logo-img" alt="logo" />
        </div>
        {
            display === 'page-start' ?
            _pageStartRoom() : 
            display === 'page-select-room' ? 
            _pageSelectRoom() :
            display === 'page-create-room' ?  
            _pageCreateRoom() :
            display === 'page-join-room' ?  
            _pageJoinRoom() :
            display === 'page-chat-room' ?  
            _chatRoom() : <></>
        }
    </div>
  )
}

export default NamePage
