import React, { useEffect } from "react";

function Practice() {
    useEffect(()=>{
        document.getElementById('lastName').value = 'Mani'
        document.getElementById('messageTextArea').value = 'Hello World'
    },[])
    
    return (
        <div id="hai">
            <div>Hello World</div>
            <button>Open dialog</button>
            <button>Close dialog</button>

            <div role="tablist">
                <button role="tab" aria-selected="true">
                    Native
                </button>
                <button role="tab" aria-selected="false">
                    React
                </button>
                <button role="tab" aria-selected="false">
                    Cypress
                </button>
            </div>
            <section>
                <div role="alert" aria-busy="false">
                    Login failed
                </div>
                <div role="alert" aria-busy="true">
                    Error: Loading message...
                </div>
            </section>

            <input type="text" id="lastName" />
            <textarea id="messageTextArea" />
            <select>
                <option value="">State</option>
                <option value="AL">Alabama</option>
                <option selected value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
            </select>

            <img alt="Incredibles 1 Poster" />
            <img alt="Incredibles 2 Poster" />
            <img alt="Incredibles 3 Poster" />
        </div>
    );
}

export default Practice;
