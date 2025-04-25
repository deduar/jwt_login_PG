<main>
    <h1 className="title">Passwordless App.</h1>

    {/* 1️⃣ TODO: Setup a div to contain the form */}
    
    <div className="grid">
        <div className="card">
            <h3>Public Endpoint</h3>
            <p>You should be able to access this when not logged in</p>
        </div>

        <div className="card">
            <h3>Private Endpoint</h3>
            <p>You need to log in to access this endpoint</p>
        </div>
    </div>
</main>

export default function Login() {
    // 1️⃣ Initialize and show the form
    // Add the lines here
    useEffect(() => {
      var cotter = new Cotter(API_KEY_ID); // 👈 Specify your API KEY ID here
      cotter
        .signInWithOTP()
        .showEmailForm()
        .then(payload => {
          console.log(payload);
          alert("Success");
        })
        .catch(err => console.log(err));
        
    }, []);
    // until here
  
    return (
        <main>
            <h1 className="title">Passwordless App.</h1>
        </main>
    );
  }