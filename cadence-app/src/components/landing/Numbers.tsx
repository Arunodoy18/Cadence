'use client';
import { Counter } from './hooks';
export function Numbers() {
  return (
    <div className="ld-nums">
      <div><b><Counter to={35} /></b><span>languages</span></div>
      <div><b><Counter to={355} /></b><span>chapters</span></div>
      <div><b><Counter to={7} /></b><span>Indian languages</span></div>
      <div><b><Counter to={0} suffix=" ads" /></b><span>ever</span></div>
    </div>
  );
}
