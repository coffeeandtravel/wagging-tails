import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="mt-0">
        <div className="h-60 w-full bg-[#EFEFEF] bottom-0 sticky">
        <div className="flex flex-col items-end h-full justify-center w-[95%]">
            <ul className="text-right text-3xl pb-5 mr-0 md:mr-20">
                <li><Link to="/contact" className="hover:text-amber-500 transition-colors">Contact us.</Link></li>
                <li><Link to="/adopt" className="hover:text-amber-500 transition-colors">Adopt a soul.</Link></li>
                <li><Link to="/donate" className="hover:text-amber-500 transition-colors">Buy us a coffee.</Link></li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Footer
