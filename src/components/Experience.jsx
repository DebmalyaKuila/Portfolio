import React from 'react'

const Experience = () => {
    return (
        <div className='my-8 w-full'>
            <h2 className='text-center font-semibold text-2xl lg:text-4xl my-16'>Experience</h2>
            <div className='w-10/12 flex flex-col m-auto items-center'>
                <div className='w-full text flex flex-wrap items-start justify-center flex-col lg:flex-row my-8'>
                    <div className='w-full lg:w-1/4 lg:text-right pr-20 pb-4 font-semibold'>Mar. 2021 - June 2021</div>
                        <div className='w-full lg:w-3/4'>
                        <h4 className='font-semibold pb-3'>Company Name - Role.</h4>
                        <span>aaaaaaaaa aaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaa adipisicing elit. Aut dolore officia laboriosam debitis totam mollitia dolor labore magnam, ratione perferendis fugit tempora repudiandae aperiam repellendus? Ad corporis eos cupiditate sint, officia officiis alias nostrum? Magni doloribus error incidunt porro ducimus mollitia aut laborum reiciendis fugit id eum consequatur ab et pariatur praesentium inventore magnam, tempora corrupti accusamus aliquid voluptatum accusantium voluptates dolorem iusto. Repellat molestiae explicabo et earum voluptatem esse quod sed, perspiciatis veritatis, mollitia, neque blanditiis sequi! Debitis vel facilis ratione rerum voluptates? Adipisci quaerat dolores sit at debitis excepturi blanditiis maiores, recusandae officia autem iusto doloremque repudiandae. Esse quod cumque possimus amet temporibus laboriosam id libero nam voluptas consectetur eligendi corporis assumenda quo quaerat dignissimos repellendus necessitatibus sit magnam doloribus minus excepturi, doloremque cupiditate maxime rem? Sunt doloremque numquam sed veniam, earum natus distinctio expedita asperiores voluptate. Voluptatem necessitatibus modi, asperiores velit sed, atque magnam, voluptatum magni esse ipsa consequatur id corporis repellat! Velit doloremque voluptate sit iure sed facere inventore impedit autem modi molestias, dolores aut assumenda, alias delectus quasi repudiandae placeat hic consectetur nisi obcaecati! Quae vel sint numquam suscipit eos minima amet, nam debitis voluptates quaerat iste adipisci? Ea voluptate excepturi assumenda amet nisi laudantium. </span>
                        <br />
                        <div className='mt-6 flex flex-wrap'>
                            {
                                ["ReactJS", "ReactJS", "ReactJS", "ReactJS", "ReactJS", "ReactJS", "ReactJS"].map(
                                    (tech ,index )=> {
                                        return (<span key={index} className='mr-4 p-2 font-medium bg-stone-700 text-amber-300 rounded my-2'>{tech}</span>)
                                    }
                                )
                            }
                        </div>
                    </div>
                    <div className='w-full lg:w-1/4 lg:text-right pr-20 pb-4 font-semibold'>Mar. 2021 - June 2021</div>
                        <div className='w-full lg:w-3/4'>
                        <h4 className='font-semibold pb-3'>Company Name - Role.</h4>
                        <span>aaaaaaaaa aaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaa adipisicing elit. Aut dolore officia laboriosam debitis totam mollitia dolor labore magnam, ratione perferendis fugit tempora repudiandae aperiam repellendus? Ad corporis eos cupiditate sint, officia officiis alias nostrum? Magni doloribus error incidunt porro ducimus mollitia aut laborum reiciendis fugit id eum consequatur ab et pariatur praesentium inventore magnam, tempora corrupti accusamus aliquid voluptatum accusantium voluptates dolorem iusto. Repellat molestiae explicabo et earum voluptatem esse quod sed, perspiciatis veritatis, mollitia, neque blanditiis sequi! Debitis vel facilis ratione rerum voluptates? Adipisci quaerat dolores sit at debitis excepturi blanditiis maiores, recusandae officia autem iusto doloremque repudiandae. Esse quod cumque possimus amet temporibus laboriosam id libero nam voluptas consectetur eligendi corporis assumenda quo quaerat dignissimos repellendus necessitatibus sit magnam doloribus minus excepturi, doloremque cupiditate maxime rem? Sunt doloremque numquam sed veniam, earum natus distinctio expedita asperiores voluptate. Voluptatem necessitatibus modi, asperiores velit sed, atque magnam, voluptatum magni esse ipsa consequatur id corporis repellat! Velit doloremque voluptate sit iure sed facere inventore impedit autem modi molestias, dolores aut assumenda, alias delectus quasi repudiandae placeat hic consectetur nisi obcaecati! Quae vel sint numquam suscipit eos minima amet, nam debitis voluptates quaerat iste adipisci? Ea voluptate excepturi assumenda amet nisi laudantium. </span>
                        <br />
                        <div className='mt-6 flex flex-wrap'>
                            {
                                ["ReactJS", "ReactJS", "ReactJS", "ReactJS", "ReactJS", "ReactJS", "ReactJS"].map(
                                   ( tech,index ) => {
                                        return (<span key={index} className='mr-4 p-2 font-medium bg-stone-700 text-amber-300 rounded my-2'>{tech}</span>)
                                    }
                                )
                            }
                        </div>
                    </div>
                    <div className='w-full lg:w-1/4 lg:text-right pr-20 pb-4 font-semibold'>Mar. 2021 - June 2021</div>
                        <div className='w-full lg:w-3/4'>
                        <h4 className='font-semibold pb-3'>Company Name - Role.</h4>
                        <span>aaaaaaaaa aaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaa adipisicing elit. Aut dolore officia laboriosam debitis totam mollitia dolor labore magnam, ratione perferendis fugit tempora repudiandae aperiam repellendus? Ad corporis eos cupiditate sint, officia officiis alias nostrum? Magni doloribus error incidunt porro ducimus mollitia aut laborum reiciendis fugit id eum consequatur ab et pariatur praesentium inventore magnam, tempora corrupti accusamus aliquid voluptatum accusantium voluptates dolorem iusto. Repellat molestiae explicabo et earum voluptatem esse quod sed, perspiciatis veritatis, mollitia, neque blanditiis sequi! Debitis vel facilis ratione rerum voluptates? Adipisci quaerat dolores sit at debitis excepturi blanditiis maiores, recusandae officia autem iusto doloremque repudiandae. Esse quod cumque possimus amet temporibus laboriosam id libero nam voluptas consectetur eligendi corporis assumenda quo quaerat dignissimos repellendus necessitatibus sit magnam doloribus minus excepturi, doloremque cupiditate maxime rem? Sunt doloremque numquam sed veniam, earum natus distinctio expedita asperiores voluptate. Voluptatem necessitatibus modi, asperiores velit sed, atque magnam, voluptatum magni esse ipsa consequatur id corporis repellat! Velit doloremque voluptate sit iure sed facere inventore impedit autem modi molestias, dolores aut assumenda, alias delectus quasi repudiandae placeat hic consectetur nisi obcaecati! Quae vel sint numquam suscipit eos minima amet, nam debitis voluptates quaerat iste adipisci? Ea voluptate excepturi assumenda amet nisi laudantium. </span>
                        <br />
                        <div className='mt-6 flex flex-wrap'>
                            {
                                ["ReactJS", "ReactJS", "ReactJS", "ReactJS", "ReactJS", "ReactJS", "ReactJS"].map(
                                    (tech,index) => {
                                        return (<span key={index} className='mr-4 p-2 font-medium bg-stone-700 text-amber-300 rounded my-2'>{tech}</span>)
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
