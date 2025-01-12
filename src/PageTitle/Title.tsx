import { Helmet } from "react-helmet";

const Title = ({ title }: { title: string }) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title} | CRUD</title>
            <link rel="canonical" href="https://mern-crud-123.netlify.app/" />
        </Helmet>
    );
};

export default Title;