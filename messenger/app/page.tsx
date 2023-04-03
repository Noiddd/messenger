import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">messenger</h1>
      <div>
        <div>
          <div>
            {/*sun icon*/}
            <h2>Example</h2>
          </div>

          <div>
            <p className="infoText">"Explain Something to me"</p>
            <p className="infoText">
              "What is the difference between a dog and a cat"
            </p>
            <p className="infoText">"What is the color of the sun"</p>
          </div>
        </div>
      </div>
    </div>
  );
}
