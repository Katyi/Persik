import Button from '@/components/Button/Button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* BACKGROUND IMAGE */}
      <div className="h-[calc(100vh-84px)] sticky top-[84px] overflow-hidden">
        <Image
          src="/desktopBanner.jpg"
          alt="Banner"
          quality={100}
          fill
          // sizes="100vw"
          className="h-full object-cover"
        />
      </div>

      {/* TEXT ON BACKGROUND IMAGE */}
      <div className="absolute top-[84px] pb-[84px] w-full sm:w-2/3 h-[calc(100vh)] flex flex-col justify-start gap-10 sm:gap-0 sm:justify-evenly pl-[5%] pr-[5%] neucha sm:bg-gradient-to-r sm:from-slate-50">
        <p className="text-[24px] sm:text-[30px] lg:text-[50px] font-[700] mt-24 sm:mt-0">
          Персик - серебристый пушистый кот
        </p>
        <p className="text-[20px] sm:text-[20px] lg:text-[24px] font-[600] lg:leading-9 text-left">
          Персик родился 1 апреля 2008 года в России. Персик потому-что он
          персидских корней. Сам же Персик считал себя аристократом - потомком
          Плантагенетов, Бурбонов и Рюриковичей. Персик ушел из жизни 5 августа
          2022 года. Этот сайт в память о нем.
        </p>
        {/* BUTTONS */}
        <div className="hidden md:grid grid-cols-2 gap-5 w-fit">
          <Link href="/about" className="z-10">
            <Button
              value="ABOUT"
              type="button"
              className={'bg-[#000] text-[#fff]'}
            />
          </Link>
          <Link href="/album" className="z-10">
            <Button
              value="ALBUM"
              type="button"
              className={
                'bg-[#F5F3F1] text-[#000] border-solid border-gray-600 border-2'
              }
            />
          </Link>
        </div>
      </div>

      {/* BOTTOM PART OF PAGE */}
      <div className="relative">
        <div className="-mt-32 md:-mt-32 xl:-mt-28">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 1199 225"
            fill=""
          >
            <path
              d="M1198.7 0.58252C587.548 187.543 145.103 153.004 0.275391 112.365V424.825H1198.7V153.764V0.58252Z"
              fill="#F5F3F1"
            />
          </svg>
        </div>
        <div className="pt-20 flex flex-col justify-center lg:grid grid-cols-2 gap-10 bg-[#F5F3F1] -mt-1">
          <div className="hidden lg:flex flex-col items-center gap-10 pl-10">
            <Image src="/Pers1.jpeg" alt="Persik" width={500} height={500} />
            <Image src="/Pers2.jpg" alt="Persik" width={500} height={500} />
            <Image src="/Pers3.jpeg" alt="Persik" width={500} height={500} />
            <div className="relative">
              <Image src="/CatPic1.svg" alt="Persik" width={500} height={500} />
              <Link
                href="#first-section"
                className="-rotate-90 absolute top-7 -left-7"
              >
                <span className="text-[#ff8562] font-[700] neucha">
                  SCROLL UP
                </span>
              </Link>
            </div>
          </div>
          <div className="pl-10 pr-10 lg:pl-0 xl:pr-20 h-fit">
            <div className="flex h-[100px] items-start justify-center lg:justify-between w-[100%] mb-3">
              <p className="text-[30px] lg:text-[40px] font-[600] neucha leading-[40px]">
                История Персика
              </p>
              <Link
                href="#second-section"
                className="-rotate-90 hidden lg:block h-fit -mr-10 mt-8"
              >
                <span className="text-[#ff8562] font-[700] text-nowrap neucha">
                  SCROLL DOWN
                </span>
              </Link>
            </div>
            <div className="flex justify-center md:block lg:hidden">
              <Image
                src="/Pers3.jpeg"
                alt="Persik"
                width={400}
                height={400}
                className="md:float-left mr-4 mb-4"
              />
            </div>
            <p className="text-[18px] -mt-2 lg:mt-10">
              Персик у нас появился случайно, когда мы ехали на дачу мимо
              базара, где женщина раздавала котят от персидской кошки, но их
              папа был дворовый кот (подозреваем, что он был сибиряком). Персик
              был единственный среди братьев и сестер с не приплюснутым носом и
              окраса Вискас. И он мяукал так громко на весь рынок, что привлекло
              наше внимание на него. И вот через 5 он уже ехал с нами домой. Он
              был такой милый и очаровательный, что все наши родственнники и
              друзья полюбили его.
              <br className="hidden lg:block" />
              <br className="hidden lg:block" />
              У Персика была очень густая шерсть. В детстве он был более серый и
              в полоску. Когда он был крохотный непонятно было, что он настолько
              пушистым вырастет. В возрасте года уже стало понятно, что он
              меховой моторчик. И расчесываться он не ужасно не любил, стал
              лохматым и еле-еле давал отрезать колтуны. Поэтому пришлось его
              каждый год летом стричь под львенка. Эту процедуру он ужасно не
              любил, но очень культурно вел себя до конца стрижки на сколько
              мог. Также не смогли мы приучить Персика вовремя к когтеточке, у
              нас тогда были старые кресла и он их царапал и мы не обращали
              внимание, мол не жалко. А то, что он потом будет царапать мягкую
              мебель (диваны и кресла) не подумали. Так, что так и прожили с
              Персиком с недорогой мягкой мебелю )))))
              <br />
              <br />В начале мы Персика кормили мясом. А корм или консерву он ел
              только иногда как вкусняшки. Так он прожил 6 лет. Затем при
              переезде в штаты пришлось его перевести на кошачьи премиальные
              корма, так как мясо там было бы очень дорого. И при возвращении
              домой не стали обратно переводить на мясо. Он его ел теперь
              наоборот изредка как деликатес. Рыбу он не любил, только тунца мог
              поесть. Мясо он любил только постное не жирное говяжье. Как-то
              дали попробовать ему мраморное мясо, но он его не захотел, то же
              самое стейки. Ни колбасу, ни котлеты он не любил, изредка мог
              съесть кусочек котлеты из бигмага )))) Молоко Персик не любил. Мог
              чуть-чуть поесть только йогурт. Чуть-чуть мог поесть оливки.
              Овощи, фрукты, каши, хлеб и т.д. он вообще не ел ))))
              <br />
              <br />
              Спать Персик любил отдельно. На своем месте. У него был матрас из
              Икеи. До этого он спал на пледе тоже Икеевском. Также любил спать
              на нашей кровати или диване днем. Но с людьми спать он не любил
              особо. Людей он не боялся. Немного боялся детей, если его сильно
              хватали. Ну а так он очень спокойный был по отношению к людям и
              другим животным. Не сломал, не уронил, не порвал, разгрыз ничего
              за свою жизнь (кроме кресел и диванов)))))
              <br />
              <br />
            </p>

            {/* <div className="flex items-center justify-center mt-[60px] lg:hidden"> */}
            <div className="flex justify-center md:block lg:hidden">
              <Image
                src="/CatPic1.svg"
                alt="Persik"
                width={400}
                height={400}
                className="md:float-right ml-4 mb-6"
              />
            </div>

            <p className="text-[18px] -mt-2">
              Персик успел пожить и побывать в Балашихе, Москве, Нью-Джерси,
              Мытищах, Владимирской обл. Но он не очень любил ездить в машине
              долго. После перелета через Антлантику у него был стресс какое-то
              время. Также он не очень любил оставаться один дома. Иногда ему
              приходилось оставаться на 2-3 дня одному. Он очень возмущался
              долго потом ))))
              <br />
              <br />
              Персик был нашим сладким ребенком. Создавал уют дома. Встречал
              всегда дома. Будил рано утром. Приносил радость и счастье своим
              существованием. Мы всегда будем помнить и любить тебя, солнышко.
              Пусть земля будет тебе пухом, наш милый милый котик!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
