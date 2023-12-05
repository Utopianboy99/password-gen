import React, { useState } from 'react';
import "../../component/passwordGen/passwordGen.css"

const PasswordGenerator = () => {
    const [password, setPassword] = useState('');
    const [isCopied, setIsCopied] = useState(false);

    const generatePassword = () => {
        const char = ["!", "@", "#", "$", "%", "&", "*", "(", ")", "/", "|", ",", "'", ":", ";"];
        const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        const alphas = [...'abcdefghijklmnopqrstuvwxyz'];
        const Alphas = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

        function randomChar(array) {
            const length = array.length;
            const randomIndex = Math.floor(Math.random() * length);
            return array[randomIndex];
        }

        function randomNum(array) {
            const length = array.length;
            const randomIndex = Math.floor(Math.random() * length);
            return array[randomIndex];
        }

        function randomAlpha(array) {
            const length = array.length;
            const randomIndex = Math.floor(Math.random() * length);
            return array[randomIndex];
        }

        const newPassword =
            randomAlpha(alphas) +
            randomAlpha(alphas) +
            randomAlpha(Alphas) +
            randomAlpha(alphas) +
            randomAlpha(alphas) +
            randomChar(char) +
            randomChar(char) +
            randomNum(nums) +
            randomNum(nums);

        setPassword(newPassword);
        setIsCopied(false);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        console.log('Copied: ' + password);
        setIsCopied(true);
    };

    return (
        <div>
            <header>Password Generator</header>

            <div id="cont">
                <button id="ok" onClick={generatePassword}>
                    Generate a password
                </button>

                <div id="panel">
                    <div id="display" style={{ display: password ? 'flex' : 'none' }}>
                        {password}
                    </div>
                    <button id="copy" style={{ display: isCopied ? 'flex' : 'none' }} onClick={copyToClipboard}>
                        Copy
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PasswordGenerator;
