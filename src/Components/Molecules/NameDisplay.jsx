// import { useState, useEffect } from 'react';

// function NameDisplay({className}) {
//     const name = "Hi!  This is Rakesh Kumar Reddy Goddeti"; // Replace with your name
//     const words = name.split(" "); // Split the name into words
//     const [displayedWords, setDisplayedWords] = useState([]);
//     const interval = 1000; // Time interval in milliseconds (1 second)

//     useEffect(() => {
//         let index = 0;

//         const timer = setInterval(() => {
//             if (index < words.length) {
//                 setDisplayedWords((prev) => [...prev, words[index]]);
//                 index++;
//             } else {
//                 clearInterval(timer); // Stop the interval when all words are displayed
//             }
//         }, interval);

//         return () => clearInterval(timer); // Cleanup on component unmount
//     }, []);

//     return (
//         <div className={className}>
//             {displayedWords.map((word, idx) => (
//                 <span key={idx} style={{ marginRight: "5px" }}>
//                     {word}
//                 </span>
//             ))}
//         </div>
//     );
// }

// export default NameDisplay;