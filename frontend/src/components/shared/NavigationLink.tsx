import { Link } from "react-router-dom";

type Props = {
    to: string;
    bg: string;
    text: string;
    textColor: string;
    onclick?: () => Promise<void>;
};

const NavigationLink = (props: Props) => {
    return (
        <Link 
            onClick={props.onclick}
            className="nav-link"
            to={props.to} 
            style={{background: props.bg, color: props.textColor }}
        > 
            {props.text}
        </Link>
    );
};

export default NavigationLink