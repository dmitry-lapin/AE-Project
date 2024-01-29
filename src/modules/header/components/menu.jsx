const Menu = () => {
    return(
        <ul className="bg-zinc-200 text-black sticky">
            <li className="flex space-x-2 rounded relative items-center hover:bg-zinc-300 py-1 px-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <p className="font-medium">Add scenario</p>
            </li>
      </ul>
    );
}

export default Menu;