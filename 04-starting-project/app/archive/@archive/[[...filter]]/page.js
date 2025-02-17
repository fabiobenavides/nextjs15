import NewsList from '@/components/news-list'
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from '@/lib/news';
import Link from 'next/link';

export default function ArchiveYear({params}) {

    const links = getAvailableNewsYears();
    const filter = params.filter;
    var news = '';
    var months = '';

    console.log(filter);

    const selectedYear = filter?.[0];
    const selectedMonth = filter?.[1];

    if (selectedYear) {
      news = getNewsForYear(selectedYear);
      months = getAvailableNewsMonths(selectedYear);
    }

    if (selectedMonth)
    {
      news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    }

    return (
      <>
        <header id="archive-header">
          <nav>
            <ul>
              {links.map(item => 
                <li key={item}>
                  <Link href={`/archive/${item}`}>{item}</Link>
                  { selectedYear && selectedYear == item && months &&
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
        { selectedYear && 
          <NewsList news={news} />
        }
      </>
  )
}
