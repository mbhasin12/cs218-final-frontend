import React, { useState } from 'react';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";


function Editor(user) {
    const [code, setCode] = useState("#Instructions: A knight and a pawn are on a chess board. \n#Can you figure out the minimum number of moves required for the knight to travel to the same position of the pawn? \n#On a single move, the knight can move in an 'L' shape; two spaces in any direction, then one space in a perpendicular direction.\n#This means that on a single move, a knight has eight possible positions it can move to. (see end of document for a picture) \n#Write a function, knight_attack, that takes in 5 arguments: n, kr, kc, pr, pc\n#n = the length of the chess board kr = the starting row of the knight kc = the starting column of the knight pr = the row of the pawn\n#pc = the column of the pawn The function should return a number representing the minimum number of moves required for the knight to land on top of the pawn. \n#The knight cannot move out of bounds of the board.\n#You can assume that rows and columns are 0-indexed. This means that if n = 8, there are 8 rows and 8 columns numbered 0 to 7. \n#If it is not possible for the knight to attack the pawn, then return None.\ndef knight_attack(n, kr, kc, pr, pc):\n    # Your code here");
const [results, setResults] = useState(null);

    const handleSubmit = async (code, user) => {

        console.log(code, user.username)
        const response = await fetch('https://cs218-finalbackend.vercel.app/runCode', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code: code, user: user.username })
        });
        const result = await response.json();
        setResults(result);
        console.log(result)
    };

    
        return (
            <div>
                <AceEditor
                    mode="python"
                    theme="monokai"
                    value={code}
                    onChange={setCode}
                    name="codeEditor"
                    editorProps={{ $blockScrolling: true }}
                    setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: true,
                        showLineNumbers: true,
                        tabSize: 4,
                    }}
                    style={{ width: '50%', height: '800px' , marginTop: '20px' }}
                />
                <button onClick={() => handleSubmit(code, user.user)} style={{ marginTop: '20px' }}>Submit Code</button>
            


                {results && (
                <div>
                    <h3>Test Results:</h3>
                    {results.passed ? (
                        <ul>
                            {results.results.map((result, index) => (
                                <li key={index} style={{ color: result.passed ? 'green' : 'red' }}>
                                    Test {index + 1}: {result.passed ? 'Passed' : 'Failed'} - Duration: {(result.duration * 1000).toFixed(2)} ms
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div>
                            
                            <p style={{ color: 'red' }}>
                                {results.results[0]}
                            </p>
                        </div>
                    )}
                </div>
            )}
            </div>     
        );
    
}

export default Editor;