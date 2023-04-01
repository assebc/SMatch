const Interests = (props) => {

    const handleImport = async () => {
        try{
            const response = await AppRegistry.get(`interests`)
            if (response.status === 200){
                getInterests();
            }
        } catch (err){
            err.response.data.error;
        }
    }

    return (
        undefined
    );
}

export default Interests;