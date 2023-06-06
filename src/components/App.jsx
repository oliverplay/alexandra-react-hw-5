import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import NotFound from './NotFound';

const HomePage = lazy(() => import('./HomePage'));
const Movies = lazy(() => import('./Movies'));
const MovieDetails = lazy(() => import('./MovieDetails'));
const Cast = lazy(() => import('./Cast'));
// const Reviews = lazy(() => import('./Reviews'));

// export default function App() {
//   return (
//     <div>
//       <Header />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route
//           path="/movies"
//           element={
//             <Suspense fallback={<div>Loading</div>}>
//               <Movies />
//             </Suspense>
//           }
//         />
//         <Route
//           path="/movies/:movieId"
//           element={
//             <Suspense fallback={<div>Loading</div>}>
//               <MovieDetails />
//             </Suspense>
//           }
//         >
//           <Route
//             path="cast"
//             element={
//               <Suspense fallback={<div>Loading</div>}>
//                 <Cast />
//               </Suspense>
//             }
//           />
//           <Route
//             path="reviews"
//             element={
//               <Suspense fallback={<div>Loading</div>}>
//                 <Reviews />
//               </Suspense>
//             }
//           />
//         </Route>
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </div>
//   );
// }

export default function App() {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          {/* <Route path="cast" element={<Cast />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}
