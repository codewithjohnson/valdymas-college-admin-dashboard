import LoaderFull from "../../../components/loaderFull/LoaderFull";

import { useIsAdmin } from "../../../hooks/useAdmin";

const Dashboard = () => {
  const { isAdmin } = useIsAdmin();


  return isAdmin ? (
    <div className="w-full h-full text-sm">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
      architecto libero praesentium, placeat temporibus nisi eaque
      exercitationem maiores. Unde, numquam inventore blanditiis nihil odio modi
      consectetur laborum cupiditate optio labore nostrum quia ab corporis quis,
      dignissimos provident architecto voluptatem vitae consequuntur iusto
      perferendis? Iste distinctio est cumque eligendi atque itaque, recusandae
      provident repudiandae fugiat voluptatem, at exercitationem corporis nisi
      porro earum. Placeat impedit id dignissimos iste eaque, quaerat iure
      beatae aliquid nostrum et porro dolorem eos, fuga nihil quos. Deserunt
      nihil beatae fuga numquam quae illum iure. Quo perspiciatis error deserunt
      consectetur sequi non aperiam, sit deleniti impedit quos libero!
    </div>
  ) : (
    <LoaderFull />
  );
};

export default Dashboard;
