
import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="imageContainer">
        <img src="/images/logo.svg" alt="Image Description" width="700" height="120" />
      </div>
      <div className="whiteRectangle">
        <p className="poppins-semibold mb-4">Login to your account.</p>
        <div className="buttonContainer">
          <h1 className="poppins-regular mb-4">User name</h1>
          <input type="text" placeholder="Username" className="textfield mb-4" style={{ width: '100%' }} /> 
          <div className="hstack">
            <h1 className="passwordText poppins-regular ">Password</h1>
            <h2 className="forgetPasswordText">Forgot?</h2>
            
          </div>
          <input type="password" placeholder="Password" className="textfield" style={{ width: '100%' }} />
          <Link href="/studentpage" className="mx-4 hover:text-gray-300">
          <button className="button" style={{ width: '100%' }}>Login now</button>
          </Link>

            
        </div>
      </div>
    </main>
  );
}


