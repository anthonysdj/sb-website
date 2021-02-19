const Form = () => {
    return (
        <div className="sm:p-3 flex-1 pb-10 sm:pb-0 mt-20 sm:mt-0">
            <input className="transition-colors focus:outline-none focus:border-light-red block border border-gray-600 rounded-lg py-2 text-sm px-3 w-full mb-3" type="text" placeholder="First Name" />
            <input className="transition-colors focus:outline-none focus:border-light-red block border border-gray-600 rounded-lg py-2 text-sm px-3 w-full mb-3" type="text" placeholder="Last Name" />
            <input className="transition-colors focus:outline-none focus:border-light-red block border border-gray-600 rounded-lg py-2 text-sm px-3 w-full mb-3" type="text" placeholder="Email Address" />
            <input className="transition-colors focus:outline-none focus:border-light-red block border border-gray-600 rounded-lg py-2 text-sm px-3 w-full mb-3" type="text" placeholder="Service" />
            <textarea className="transition-colors focus:outline-none focus:border-light-red block border border-gray-600 rounded-lg py-2 text-sm px-3 w-full mb-3" rows="10" placeholder="Here you can write your preffered date/time or additional information for the chosen service."></textarea>
            <button className="uppercase rounded-lg text-lg block max-w-sm mx-auto border border-gray-600 py-1 px-10">Submit</button>
        </div>
    );
}
 
export default Form;