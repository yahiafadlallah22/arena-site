import { getMascotImage } from '../../data/portal-settings';

interface FounderSpotProps {
  category: string;
  title: string;
  description?: string;
}

export default function FounderSpot({ category, title, description }: FounderSpotProps) {
  const imageUrl = getMascotImage(category);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#19A880]">Yahia Figure Spot</p>
      <h3 className="mt-2 text-lg font-semibold text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">
        {description || 'Upload your PNG character by category from Admin. This slot keeps your personal branding visible in each module.'}
      </p>
      <div className="mt-4 overflow-hidden rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-3">
        {imageUrl ? (
          <img src={imageUrl} alt="Yahia Fadlallah figure" className="h-44 w-full object-contain" />
        ) : (
          <div className="flex h-44 items-center justify-center text-sm text-slate-500">
            No PNG uploaded yet. Add one in /admin.
          </div>
        )}
      </div>
    </div>
  );
}
