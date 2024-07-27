export const Footer = (props) => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div id="footer">
        <div className="container text-center">
          <p>&copy; {currentYear} Lase_Clothing. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};
