import Image from 'next/image'
import { BsCheck } from 'react-icons/bs'
import { FiX } from 'react-icons/fi'
import { AiFillStar } from 'react-icons/ai'

function Card() {
  return (
    <div className="min-w-max max-w-sm">
      <BestOverall />
      <div className="mb-6 flex max-w-sm flex-col overflow-hidden rounded-md shadow-xl dark:bg-gradient-to-br dark:from-dark-card dark:to-blue-800">
        <header className="w-full bg-dark-primary-button p-1 text-center  text-white dark:bg-transparent dark:text-white">
          <h3 className="text-lg">Apple - Airpods Max</h3>
        </header>
        <Image
          src={'/tech/headphones/airpodsMax/1.png'}
          height={644}
          width={644}
          alt="Apple"
        />

        <div className="text-center">
          <p className="bg-yellow-700 text-white">US $800</p>
        </div>

        <div className="ml-8 mt-2">
          <h4 className="text-lg font-semibold text-green-700 dark:text-green-300">
            Positives
          </h4>
          <ul className="">
            <li className="flex items-center space-x-2">
              <BsCheck className="text-base text-green-700 dark:text-green-300" />
              <p>Sound Quality</p>
            </li>

            <li className="flex items-center space-x-2">
              <BsCheck className="text-green-700 dark:text-green-300" />
              <p> USB Type-C Charging </p>
            </li>
            <li className="flex items-center space-x-2">
              <BsCheck className="text-green-700 dark:text-green-300" />
              <p> Superb noice cancelling</p>
            </li>
            <li className="flex items-center space-x-2">
              <BsCheck className="text-green-700 dark:text-green-300" />

              <p> Touch Controlls</p>
            </li>
          </ul>
          <h4 className="text-lg font-semibold text-red-700 dark:text-red-300">
            Negatives
          </h4>
          <ul>
            <li className="flex items-center space-x-2">
              <FiX className="text-base text-red-700 dark:text-red-300" />
              <p> Price</p>
            </li>
          </ul>
        </div>
        <a href="">
          <div className="mx-auto my-2 max-w-90 cursor-pointer rounded-md bg-dark-primary-3 py-1 text-center text-white">
            View Product
          </div>
        </a>
      </div>
    </div>
  )
}

export default Card

const BestOverall = () => {
  return (
    <div className="mb-1 flex items-center">
      <hr className="mx-auto my-4 w-1/5 border-t-2 border-green-900 dark:border-green-300" />
      <div className="flex items-center space-x-2 text-green-900 dark:text-green-300">
        <AiFillStar />
        <p>Best Overall</p>
      </div>
      <hr className="mx-auto my-4 w-1/5 border-t-2 border-green-900 dark:border-green-300" />
    </div>
  )
}