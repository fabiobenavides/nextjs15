import NewsList from '@/components/news-list'
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from '@/lib/news';
import Link from 'next/link';
import React, { Suspense } from 'react';

async function FilterHeader({year, month}) {

  const links = await getAvailableNewsYears();
  var months = '';
  if (year) {
    months = getAvailableNewsMonths(year);
  }

  //console.log("links:", links);
  //console.log("months:", months);

  if (year && !links.includes(year) 
    || month && !months.includes(month)) {
      throw new Error('Invalid filter');
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map(item => 
            <li key={item}>
              <Link href={`/archive/${item}`}>{item}</Link>
              { year && year == item && months &&
                <ul>
                  {months.map(month => 
                    <li key={month}>
                      <Link href={`/archive/${item}/${month}`}>{month}</Link>  
                    </li>
                  )}    
                </ul>
              }
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}

async function FilteredNews({year, month}) {
  let news;

  if (year && !month) {
    news = await getNewsForYear(year);    
  }

  if (month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return newsContent;
}

export default async function ArchiveYear({params}) {

    //const filters = React.use(params);
    const filter = params.filter;
    //console.log(filter);
    const selectedYear = filter?.[0];
    const selectedMonth = filter?.[1];

    return (
      <>
        { // A granual way to say that a part of the component is still loading 
        }
        <Suspense fallback={<p>Loading filter...</p>}>
          <FilterHeader year={selectedYear} month={selectedMonth} />
        </Suspense>
        { // A granual way to say that a part of the component is still loading 
        }
        <Suspense fallback={<p>Loading news...</p>}>
          <FilteredNews year={selectedYear} month={selectedMonth} />
        </Suspense>
      </>
  )
}
