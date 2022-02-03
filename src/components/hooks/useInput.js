import React, {useState} from 'react';

const useInput = () => {
    const [value, setValue] = useState("")
    return {value, setValue}
};

export default useInput;
