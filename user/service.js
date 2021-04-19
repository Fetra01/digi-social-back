exports.Service = (MODEL) => {
    /**
     * 
     * @returns tous les utilisateur
     */
    const all = async() => {
        return await MODEL.findAll()
    };

    /**
     * Créer un utilisateur
     * @param {*} user 
     * @returns le user insérée dans la base
     */
    const create = async(user) => {
        return await MODEL.create({...user})
    };

    return { all, create };
};