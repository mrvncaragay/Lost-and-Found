export default theme => ({
    root: {
        display: 'flex',
        backgroundColor: theme.palette.common.white,
    },
    appbar: {
        backgroundColor: theme.palette.common.white,
        borderBottom: `1px solid ${theme.palette.border}`
    },
    toolbar: {
        justifyContent: 'space-between'
    },
    left: {
        flex: 1
    }, 
    right: {
        display: 'flex',
        justifyContent: 'flex-end',
        flex: 1
      },
    rightLink: {
        fontSize: '16px',
        color: 'red'
    } ,
    image: {
        height: '63px'
      }
});