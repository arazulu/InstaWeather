/** @jsx jsx */
import { jsx } from "theme-ui";

const Footer = () => {
  return (
    <footer sx={{ variant: "footer", fontWeight: 'bold', fontSize: [2, 4, 5], a: { textDecoration: 'none' } }}>
      <p>Icons made by <a
        href="https://fontawesome.com/how-to-use/on-the-web/using-with/react"
        title="font awesome"
      >fontAwesome</a> & <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </p>
    </footer>
  );
};

export default Footer;
