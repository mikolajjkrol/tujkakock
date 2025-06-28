import React from "react";
import "./placeholder-image.css";

export interface PlaceholderImageProps {
  width?: number;
  height?: number;
  text?: string;
  backgroundColor?: string;
  textColor?: string;
  className?: string;
  borderRadius?: string;
  style?: React.CSSProperties;
}

/**
 * A customizable placeholder image component
 */
export function PlaceholderImage({
  width = 300,
  height = 200,
  text = "Placeholder Image",
  backgroundColor = "#e2e8f0",
  textColor = "#64748b",
  className = "",
  borderRadius = "0.375rem",
  style = {},
}: PlaceholderImageProps) {
  return (
    <div
      className={`placeholder-image ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor,
        color: textColor,
        borderRadius,
        ...style,
      }}
    >
      <span>{text}</span>
      <span className="placeholder-dimensions">{`${width}×${height}`}</span>
    </div>
  );
}

/**
 * A profile placeholder image with circular shape
 */
export function ProfilePlaceholder({
  size = 100,
  text = "User",
  backgroundColor = "#94a3b8",
  textColor = "#f8fafc",
  className = "",
  style = {},
}: Omit<PlaceholderImageProps, "width" | "height" | "borderRadius"> & {
  size?: number;
}) {
  return (
    <div
      className={`placeholder-image profile-placeholder ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor,
        color: textColor,
        borderRadius: "50%",
        ...style,
      }}
    >
      {text
        .split(" ")
        .map(word => word[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()}
    </div>
  );
}

/**
 * A product placeholder image with standard size options
 */
export function ProductPlaceholder({
  size = "medium",
  text = "Product",
  className = "",
  backgroundColor = "#cbd5e1",
  textColor = "#475569",
  style = {},
}: Omit<PlaceholderImageProps, "width" | "height"> & {
  size?: "small" | "medium" | "large";
}) {
  const dimensions = {
    small: { width: 200, height: 200 },
    medium: { width: 300, height: 300 },
    large: { width: 600, height: 600 },
  };

  const { width, height } = dimensions[size];

  return (
    <div
      className={`placeholder-image product-placeholder ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor,
        color: textColor,
        borderRadius: "0.375rem",
        ...style,
      }}
    >
      <span>{text}</span>
      <span className="placeholder-dimensions">{`${width}×${height}`}</span>
    </div>
  );
}

/**
 * A banner placeholder image with standard sizes
 */
export function BannerPlaceholder({
  size = "medium",
  text = "Banner",
  className = "",
  backgroundColor = "#bae6fd",
  textColor = "#0369a1",
  style = {},
}: Omit<PlaceholderImageProps, "width" | "height"> & {
  size?: "small" | "medium" | "large";
}) {
  const dimensions = {
    small: { width: 600, height: 200 },
    medium: { width: 800, height: 300 },
    large: { width: 1200, height: 400 },
  };

  const { width, height } = dimensions[size];

  return (
    <div
      className={`placeholder-image banner-placeholder ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor,
        color: textColor,
        borderRadius: "0.375rem",
        ...style,
      }}
    >
      <span>{text}</span>
      <span className="placeholder-dimensions">{`${width}×${height}`}</span>
    </div>
  );
}