"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { inputClass } from "@/components/ui/blocks";

const services = [
  {
    value: "Home Renovations & Refurbishments",
    desc: "Transform your property with comprehensive renovation services for houses and flats.",
  },
  {
    value: "House Extensions",
    desc: "Add space and value with rear, side, wrap-around and double-storey extensions.",
  },
  {
    value: "Kitchen Installation & Remodelling",
    desc: "Bespoke kitchen fitting including cabinets, worktops, plumbing, electrics and flooring.",
  },
  {
    value: "Bathroom Installation",
    desc: "Complete bathroom refurbishments including wet rooms, walk-in showers and tiling.",
  },
  {
    value: "Shop Fitting & Commercial Refurbishment",
    desc: "Fit-outs for shops, takeaways, cafés, salons, offices and warehouses.",
  },
  {
    value: "Roofing Repairs",
    desc: "Flat roof repairs, slate & tile roofing, gutters, fascias and leak fixes.",
  },
  {
    value: "Plastering & Rendering",
    desc: "Skimming, re-plastering, dry lining, ceiling repair and external render.",
  },
  {
    value: "Flooring Services",
    desc: "Laminate, vinyl, LVT, hardwood and commercial flooring with proper subfloor prep.",
  },
  {
    value: "Painting & Decorating",
    desc: "Interior, exterior, woodwork, wallpaper and commercial decorating.",
  },
  {
    value: "General Building & Brickwork",
    desc: "Brickwork, blockwork, RSJ beams, garden walls and structural openings.",
  },
  {
    value: "Property Maintenance",
    desc: "Landlord, letting agent and commercial maintenance — planned and emergency.",
  },
  {
    value: "Landscaping & External Works",
    desc: "Patios, driveways, fencing, decking and garden improvements.",
  },
];

const STEPS = 4;
const fieldLabel =
  "block text-[17px] font-extrabold uppercase tracking-[.4px] text-navy";
const quoteFieldInput = `${inputClass} mt-[7px] text-[20px] font-normal normal-case`;

export function QuoteForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const [helperError, setHelperError] = useState(false);
  const [fileLabel, setFileLabel] = useState("Click to upload");

  const selectedCount = Object.values(selected).filter(Boolean).length;

  const validateStep = () => {
    if (step === 0) {
      if (selectedCount === 0) {
        setHelperError(true);
        return false;
      }
      setHelperError(false);
    }
    const fieldset = formRef.current?.querySelector(
      `[data-step="${step}"]`,
    ) as HTMLElement | null;
    if (fieldset) {
      const required = Array.from(
        fieldset.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
          "[required]",
        ),
      );
      for (const field of required) {
        if (!field.checkValidity()) {
          field.reportValidity();
          return false;
        }
      }
    }
    return true;
  };

  const next = () => {
    if (validateStep()) setStep((s) => Math.min(s + 1, STEPS - 1));
  };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateStep()) return;
    window.alert(
      "Thank you. Your quote request form is complete and ready to connect to an email or backend service before publishing.",
    );
  };

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className="relative overflow-hidden rounded-2xl border border-line bg-white p-[38px] shadow-brand before:absolute before:inset-x-0 before:top-0 before:h-[5px] before:bg-orange before:content-[''] max-tab:p-[26px_20px]"
    >
      {/* Progress */}
      <div className="mb-[14px] grid grid-cols-4 gap-2" aria-label="Quote form progress">
        {Array.from({ length: STEPS }).map((_, i) => (
          <span
            key={i}
            className={cn("block h-[5px]", i <= step ? "bg-orange" : "bg-[#dce5f0]")}
          />
        ))}
      </div>
      <div className="mb-[24px] text-[16px] font-extrabold uppercase tracking-[.8px] text-muted">
        Step {step + 1} of {STEPS}
      </div>

      {/* Step 1 — services */}
      <fieldset data-step="0" className={cn("m-0 border-0 p-0", step === 0 ? "block animate-quoteFade" : "hidden")}>
        <legend className="mb-1 block w-full text-[34px] font-bold leading-[1.05] text-navy">
          Which services do you need?
        </legend>
        <p
          className={cn(
            "mb-[22px] text-[20px]",
            helperError ? "font-bold text-[#c0392b]" : "text-muted",
          )}
        >
          {helperError
            ? "Please select at least one service before continuing."
            : "Select all that apply."}
        </p>
        <div className="grid grid-cols-1 gap-[14px] tab:grid-cols-2">
          {services.map((s) => (
            <label
              key={s.value}
              className={cn(
                "relative block min-h-[112px] cursor-pointer rounded-xl border bg-white pb-4 pl-[52px] pr-[18px] pt-[18px] transition-all duration-200 hover:-translate-y-[3px] hover:border-orange/65 hover:shadow-[0_12px_28px_rgba(0,34,90,.09)]",
                selected[s.value] ? "border-orange bg-[#fff7f3]" : "border-line",
              )}
            >
              <input
                type="checkbox"
                name="services"
                value={s.value}
                checked={!!selected[s.value]}
                onChange={(e) =>
                  setSelected((prev) => ({ ...prev, [s.value]: e.target.checked }))
                }
                className="absolute left-[18px] top-[22px] h-[19px] w-[19px] accent-orange"
              />
              <strong className="mb-[7px] block text-[22px] font-bold leading-[1.05] text-navy">
                {s.value}
              </strong>
              <span className="block text-[17px] leading-[1.35] text-muted">
                {s.desc}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Step 2 — project details */}
      <fieldset data-step="1" className={cn("m-0 border-0 p-0", step === 1 ? "block animate-quoteFade" : "hidden")}>
        <legend className="mb-1 block w-full text-[34px] font-bold leading-[1.05] text-navy">
          Project details
        </legend>
        <div className="grid grid-cols-1 gap-[18px] tab:grid-cols-2">
          <label className={cn(fieldLabel, "col-span-full")}>
            Property type
            <select name="property_type" required className={quoteFieldInput}>
              <option value="House">House</option>
              <option value="Flat">Flat</option>
              <option value="Shop / Retail">Shop / Retail</option>
              <option value="Office">Office</option>
              <option value="Warehouse / Industrial">Warehouse / Industrial</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label className={cn(fieldLabel, "col-span-full")}>
            Describe the work *
            <textarea
              name="work_description"
              required
              placeholder="What needs doing? Rough sizes, finishes, anything special..."
              className={`${quoteFieldInput} min-h-[150px]`}
            />
          </label>
          <label className={fieldLabel}>
            Budget (optional)
            <select name="budget" className={quoteFieldInput}>
              <option>Not sure</option>
              <option>Under £5,000</option>
              <option>£5,000 - £15,000</option>
              <option>£15,000 - £30,000</option>
              <option>£30,000 - £50,000</option>
              <option>£50,000+</option>
            </select>
          </label>
          <label className={fieldLabel}>
            Timeframe
            <select name="timeframe" className={quoteFieldInput}>
              <option>Flexible</option>
              <option>ASAP</option>
              <option>1 - 3 months</option>
              <option>3 - 6 months</option>
              <option>Planning only</option>
            </select>
          </label>
        </div>
      </fieldset>

      {/* Step 3 — photos */}
      <fieldset data-step="2" className={cn("m-0 border-0 p-0", step === 2 ? "block animate-quoteFade" : "hidden")}>
        <legend className="mb-1 block w-full text-[34px] font-bold leading-[1.05] text-navy">
          Photos &amp; plans (optional)
        </legend>
        <p className="mb-[22px] text-[20px] text-muted">
          Photos help us quote more accurately. Max 10MB each, 20 files total.
        </p>
        <label className="relative grid min-h-[210px] cursor-pointer place-items-center rounded-xl border-2 border-dashed border-[#cbd8e8] bg-[#f7fbff] text-center transition-all duration-200 hover:-translate-y-[3px] hover:border-orange hover:bg-[#fff7f3]">
          <input
            type="file"
            name="project_files"
            multiple
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={(e) =>
              setFileLabel(
                e.target.files && e.target.files.length
                  ? `${e.target.files.length} file(s) selected`
                  : "Click to upload",
              )
            }
            className="pointer-events-none absolute opacity-0"
          />
          <div>
            <span className="mx-auto mb-2 grid h-[48px] w-[48px] place-items-center rounded-full bg-orange text-[24px] text-white">
              ⇧
            </span>
            <strong className="block text-[24px] leading-none text-navy">
              {fileLabel}
            </strong>
            <small className="mt-1 block text-[15px] font-bold text-muted">
              JPG, PNG, PDF
            </small>
          </div>
        </label>
      </fieldset>

      {/* Step 4 — contact */}
      <fieldset data-step="3" className={cn("m-0 border-0 p-0", step === 3 ? "block animate-quoteFade" : "hidden")}>
        <legend className="mb-1 block w-full text-[34px] font-bold leading-[1.05] text-navy">
          Your contact details
        </legend>
        <div className="grid grid-cols-1 gap-[18px] tab:grid-cols-2">
          <label className={cn(fieldLabel, "col-span-full")}>
            Full name *
            <input type="text" name="full_name" required className={quoteFieldInput} />
          </label>
          <label className={fieldLabel}>
            Email *
            <input type="email" name="email" required className={quoteFieldInput} />
          </label>
          <label className={fieldLabel}>
            Phone *
            <input type="tel" name="phone" required className={quoteFieldInput} />
          </label>
          <label className={cn(fieldLabel, "col-span-full")}>
            Property address
            <input type="text" name="address" className={quoteFieldInput} />
          </label>
          <label className={cn(fieldLabel, "col-span-full")}>
            POSTCODE
            <input type="text" name="postcode" className={quoteFieldInput} />
          </label>
        </div>
        <p className="mt-4 text-[16px] text-muted">
          By submitting you agree to our{" "}
          <a href="#" className="text-orange underline">
            privacy policy
          </a>
          .
        </p>
      </fieldset>

      {/* Actions */}
      <div className="mt-[30px] flex items-center justify-between gap-4 border-t border-line pt-[24px] max-tab:flex-col-reverse max-tab:items-stretch">
        <Button
          variant="outline"
          onClick={back}
          disabled={step === 0}
          className="disabled:pointer-events-none disabled:opacity-45"
        >
          ‹ Back
        </Button>
        {step < STEPS - 1 ? (
          <Button onClick={next} className="ml-auto max-tab:ml-0">
            Next ›
          </Button>
        ) : (
          <Button type="submit" className="ml-auto max-tab:ml-0">
            Submit quote
          </Button>
        )}
      </div>
    </form>
  );
}
