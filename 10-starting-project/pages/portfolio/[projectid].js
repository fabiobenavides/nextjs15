import { useRouter } from 'next/router';

export default function PortfolioProject() {

    const router = useRouter();
    const { projectid } = router.query;
    console.log("projectid:",projectid)
    console.log("pathname:",router.pathname);

  return (
    <div>Portfolio Project page

    </div>
  )
}
