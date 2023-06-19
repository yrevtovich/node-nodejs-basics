const RSS_ENV_REG_EXP = /^RSS./

const parseEnv = () => {
    const environmentVariables = process.env;
    const filteredKeys = Object.keys(process.env).filter((value) => RSS_ENV_REG_EXP.test(value));
    const valuesArray = filteredKeys.map((key) => `${key}=${environmentVariables[key]}`)

    console.log(valuesArray.join('; '));
};

parseEnv();