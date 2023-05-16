
 const varient ={
 
    primary: {
        backgroundColor: '#2196f3',
        color: '#fff',
    },
    success: {
        backgroundColor: '#4caf50',
        color: '#000',
    },
    error: {
        backgroundColor: '#f44336',
        color: '#fff',
    },
    warning: {
        backgroundColor: '#ff9800',
        color: '#000',
    },
    info: {
        backgroundColor: '#80d8ff',
        color: '#000',
    },
}
  
const sizes = {
    small: { padding: '0.5rem 1rem' },
    medium: { padding: '1rem 2rem' },
    large: { padding: '1.5rem 3rem' },
};


const Button = (props) => {
    const userVarient = varient[props.varient]
    const userSize = sizes[props.size]
      
return (
        <button style=
        {
            {
                fontSize: '0.9rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                border: 'none',
                marginRight: '1rem',
                cursor: 'pointer',
                borderRadius: '5px',
                ...userVarient,
                ...userSize
            }
        }
        type= {props.type}
        >
           {props.name}
        </button>
)
}

export default Button 

