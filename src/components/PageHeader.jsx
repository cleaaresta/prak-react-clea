export default function PageHeader({ title, breadcrumb, children }) {
  return (
    <div
      id="pageheader-container"
      className="flex items-center justify-between p-4"
    >
      {/* Kiri */}
      <div id="pageheader-left" className="flex flex-col">
        <span id="pageheader-title" className="text-3xl font-semibold">
          {title}
        </span>

        <div
          id="breadcrumb-links"
          className="flex items-center font-medium space-x-2 mt-2"
        >
          {Array.isArray(breadcrumb) ? (
            breadcrumb.map((item, index) => (
              <span key={index} className="flex items-center space-x-2">
                <span className="text-gray-500">{item}</span>
                {index < breadcrumb.length - 1 && (
                  <span className="text-gray-500">/</span>
                )}
              </span>
            ))
          ) : (
            <span className="text-gray-500">{breadcrumb}</span>
          )}
        </div>
      </div>

      {/* Kanan */}
      <div id="action-button">
        {children}
      </div>
    </div>
  );
}
