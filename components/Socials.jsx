import {
    BiLogoInstagram, 
    BiLogoLinkedin, 
    BiLogoGithub} from 'react-icons/bi'

const socials=[
    {
        icon: <BiLogoInstagram />,
        path:"https://www.instagram.com/anminhtt/"
    },
    {
        icon: <BiLogoLinkedin />,
        path:"https://www.linkedin.com/in/an-trinh177/"
    },
    {
        icon: <BiLogoGithub />,
        path:"https://github.com/antrinh177"
    }
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <a 
                    key={index} 
                    className={iconStyles}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {item.icon}
                </a>
            )
        })}
    </div>
  )
}

export default Socials