import PromptSync from "prompt-sync";
const prompt = PromptSync();

const getLength = () => {
    const length = prompt('how many rows do you want to pick from this file ? : ');
    return length;
}

export default getLength