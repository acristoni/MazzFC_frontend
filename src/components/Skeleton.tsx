export default function Skeleton() {
    return (
        <div className="Flex-column" style={{ marginBottom: '40px' }}>
            <div className="Skeleton-bar" style={{ width: '300px' }}/>
            <div 
                className="Skeleton-bar"
                style={{
                    height: '32px',
                    width: '400px'
                }}
            />
            <div className="Skeleton-bar" style={{ width: '500px' }}/>
        </div>
    )
}