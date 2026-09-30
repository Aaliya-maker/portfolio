export const Button = ({className="",size="default",children}) => {
  {/* what a base class of a button should look like without caring of different sizes*/}
  {/*focus-visible prefix is used to style the button when it is focused using keyboard navigation*/}
  const baseClasses="relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary/25";
  const sizeClasses={
    sm:"px-4 py-2 text-sm",
    default:"px-6 py-3 text-base",
    lg:"px-8 py-4 text-lg"
  }
  const classes=`${baseClasses} ${sizeClasses[size]} ${className}`;
  return (
    <button className={classes}>
     <span className="relative flex items-center justify-center">{children}</span>
    </button>    
  )
}