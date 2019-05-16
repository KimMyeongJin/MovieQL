const lagom = {
    name:"lagom",
    age:18,
    gender:"male"
};

const resolvers = {
    Query: {
        person: () => lagom
    }
};

export default resolvers;