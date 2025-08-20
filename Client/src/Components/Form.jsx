const Form = ({Title , buttonText , onSubmit , formData , setFormData}) => {
    return (

        <div className="min-h-screen bg-blue-200 flex items-center justify-center">
        <form className="space-y-4  border-2 w-[340px] h-[400px]" onSubmit={onSubmit}>
                <div>
                    <h1>{Title}</h1>
                    <label htmlFor="">username</label>
                    <input type="text" 
                    value = {formData.username}
                    onChange={(e) => setFormData({...formData , username : e.target.value})}
                    />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="text" 
                    value = {formData.email}
                    onChange={(e) => setFormData({...formData , email : e.target.value})}
                    />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="text" 
                    value = {formData.password}
                    onChange={(e) => setFormData({...formData , password : e.target.value})}
                    />
                </div>
                <div>
                <button type="submit">{buttonText}</button>
                </div>

            </form>
        </div>

    )
}

export default Form;