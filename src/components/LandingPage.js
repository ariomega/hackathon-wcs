import React, { useRef } from "react"

import Modal from './Modal'
import GameSettings from './GameSettings'
import "./LandingPage.css"

const LandingPage = () => {
    const modalRef = useRef();

    return (
        <div className="landingPage">
            <div className="landing-text">
                <h1 className="memory-travel">Travel Memory Game</h1>
                <button className="button-enter" onClick={() => modalRef.current.openModal()}>Enter</button>
            </div>
                <Modal ref={modalRef} >
                    <h1>New Game</h1>
                    <button className="close-btn" onClick={() => modalRef.current.closeModal()}>X</button>
                    <GameSettings />
                </Modal>
        </div>
    )
}

export default LandingPage