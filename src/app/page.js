import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <main className="container p-2 ">
      <div className="flex flex-col pt-8 text-center items-center align-center ">
        <div>
          <p className={"text-4xl "}>Good Morning</p>
        </div>
        <Link
          href={"/todo"}
          className=" mt-8 w-1/3 bg-[#FC819E] text-emerald-300 rounded-md p-2"
        >
          TO-DO List
        </Link>
      </div>
      <div className="font-normal flex flex-col text-2xl pt-8 text-center items-center align-center ">
        <h1>Task bilgileri</h1>
        <div>
          <table>
            <tbody>
            <tr className="">
              <th>Bitirilen</th>
              <th>Devam Eden</th>
            </tr>
            </tbody>
            <tbody>
            <tr>
              <td>veri1</td>
              <td>veri2</td>
            </tr>
            </tbody>
            </table>
        </div>
      </div>
    </main>
  );
}
