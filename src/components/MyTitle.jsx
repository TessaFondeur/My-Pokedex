const container = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
};

function MyTitle() {

    return <section style={container}><h1 style={{ color: 'green', fontWeight: 900 }}>Mon Pokédex</h1>;
    </section>
}


export default MyTitle;