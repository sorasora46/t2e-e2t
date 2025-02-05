// import { useState } from 'react';

// const keymap = {
//   'ๅ': '1', '+': '!', '๑': '@', '/': '2', '-': '3', '๒': '#', 'ภ': '4', '๓': '$',
//   'ถ': '5', '๔': '%', 'ุ': '6', 'ู': '^', 'ึ': '7', '฿': '&', 'ค': '8', '๕': '*',
//   'ต': '9', '๖': '(', 'จ': '0', '๗': ')', 'ข': '-', '๘': '_', 'ช': '=', '๙': '+',
//   'ๆ': 'q', '๐': 'Q', 'ไ': 'w', '"': 'W', 'ำ': 'e', 'ฎ': 'E', 'พ': 'r', 'ฑ': 'R',
//   'ะ': 't', 'ธ': 'T', 'ั': 'y', 'ํ': 'Y', 'ี': 'u', '๊': 'U', 'ร': 'i', 'ณ': 'I',
//   'น': 'o', 'ฯ': 'O', 'ย': 'p', 'ญ': 'P', 'บ': '[', 'ฐ': '{', 'ล': ']', '|': '}',
//   'ฃ': '\\', 'ฅ': '|', 'ฟ': 'a', 'ฤ': 'A', 'ห': 's', 'ฆ': 'S', 'ก': 'd', 'ฏ': 'D',
//   'ด': 'f', 'โ': 'F', 'เ': 'g', 'ฌ': 'G', '้': 'h', '็': 'H', '่': 'j', '๋': 'J',
//   'า': 'k', 'ษ': 'K', 'ส': 'l', 'ศ': 'L', 'ว': ';', 'ซ': ':', 'ง': '\'', '.': '"',
//   'ผ': 'z', '(': 'Z', 'ป': 'x', ')': 'X', 'แ': 'c', 'ฉ': 'C', 'อ': 'v', 'ฮ': 'V',
//   'ิ': 'b', 'ฺ': 'B', 'ื': 'n', '์': 'N', 'ท': 'm', '?': 'M', 'ม': '|', 'ฒ': '<',
//   'ใ': '.', 'ฬ': '>', 'ฝ': '/', 'ฦ': '?'
// };


// const convertToEnglish = (input) => {
//   return input.split('').map(char => keymap[char] || char).join('');
// };

// const ThaiToEnglishConverter = () => {
//   const [input, setInput] = useState('');
//   const [converted, setConverted] = useState('');

//   const handleInputChange = (event) => {
//     const value = event.target.value;
//     setInput(value);
//     setConverted(convertToEnglish(value));
//   };

//   return (
//     <div>
//       <h1>Thai to English Converter</h1>
//       <input
//         type="text"
//         value={input}
//         onChange={handleInputChange}
//         placeholder="Type Thai characters here"
//       />
//       <p>Converted: {converted}</p>
//     </div>
//   );
// };

// export default ThaiToEnglishConverter;
import { useState } from 'react';

const keymap = {
  // Thai to English mapping (as you already have)
  'ๅ': '1', '+': '!', '๑': '@', '/': '2', '-': '3', '๒': '#', 'ภ': '4', '๓': '$',
  'ถ': '5', '๔': '%', 'ุ': '6', 'ู': '^', 'ึ': '7', '฿': '&', 'ค': '8', '๕': '*',
  'ต': '9', '๖': '(', 'จ': '0', '๗': ')', 'ข': '-', '๘': '_', 'ช': '=', '๙': '+',
  'ๆ': 'q', '๐': 'Q', 'ไ': 'w', '"': 'W', 'ำ': 'e', 'ฎ': 'E', 'พ': 'r', 'ฑ': 'R',
  'ะ': 't', 'ธ': 'T', 'ั': 'y', 'ํ': 'Y', 'ี': 'u', '๊': 'U', 'ร': 'i', 'ณ': 'I',
  'น': 'o', 'ฯ': 'O', 'ย': 'p', 'ญ': 'P', 'บ': '[', 'ฐ': '{', 'ล': ']', '|': '}',
  'ฃ': '\\', 'ฅ': '|', 'ฟ': 'a', 'ฤ': 'A', 'ห': 's', 'ฆ': 'S', 'ก': 'd', 'ฏ': 'D',
  'ด': 'f', 'โ': 'F', 'เ': 'g', 'ฌ': 'G', '้': 'h', '็': 'H', '่': 'j', '๋': 'J',
  'า': 'k', 'ษ': 'K', 'ส': 'l', 'ศ': 'L', 'ว': ';', 'ซ': ':', 'ง': '\'', '.': '"',
  'ผ': 'z', '(': 'Z', 'ป': 'x', ')': 'X', 'แ': 'c', 'ฉ': 'C', 'อ': 'v', 'ฮ': 'V',
  'ิ': 'b', 'ฺ': 'B', 'ื': 'n', '์': 'N', 'ท': 'm', '?': 'M', 'ม': '|', 'ฒ': '<',
  'ใ': '.', 'ฬ': '>', 'ฝ': '/', 'ฦ': '?'
};

const reverseKeymap = Object.fromEntries(
  Object.entries(keymap).map(([thai, english]) => [english, thai])
);

const convertToEnglish = (input) => {
  return input.split('').map(char => keymap[char] || char).join('');
};

const convertToThai = (input) => {
  return input.split('').map(char => reverseKeymap[char] || char).join('');
};

const ThaiToEnglishConverter = () => {
  const [input, setInput] = useState('');
  const [converted, setConverted] = useState('');
  const [isThaiToEnglish, setIsThaiToEnglish] = useState(true);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInput(value);
    setConverted(isThaiToEnglish ? convertToEnglish(value) : convertToThai(value));
  };

  const toggleConversion = () => {
    setIsThaiToEnglish(!isThaiToEnglish);
    setConverted(isThaiToEnglish ? convertToThai(input) : convertToEnglish(input));
  };

  return (
    <div>
      <h1>{isThaiToEnglish ? 'Thai to English Converter' : 'English to Thai Converter'}</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder={isThaiToEnglish ? 'Type Thai characters here' : 'Type English characters here'}
      />
      <p>Converted: {converted}</p>
      <button onClick={toggleConversion}>
        Switch to {isThaiToEnglish ? 'English to Thai' : 'Thai to English'}
      </button>
    </div>
  );
};

export default ThaiToEnglishConverter;
