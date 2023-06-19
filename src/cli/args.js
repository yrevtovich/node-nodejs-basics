import { execSync } from 'child_process';

const PARAMETER_REG_EX = /^--./

const parseArgs = () => {
    const { argv } = process;
    const argumentsData = process.argv.slice(2)

    const parsedArgumentsArray = argumentsData.reduce((accum, value, index) => {
        if (PARAMETER_REG_EX.test(value)) {
            return [...accum, `${value} is ${argumentsData[index+1]}`]
        }

        return accum
    }, [])

    console.log(parsedArgumentsArray.join(', '))
};

parseArgs();