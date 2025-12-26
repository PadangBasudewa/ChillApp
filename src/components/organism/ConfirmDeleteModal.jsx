import { createPortal } from "react-dom";
import { FiX, FiTrash2 } from "react-icons/fi";

export default function ConfirmDeleteModal({ onClose, onConfirm }) {
  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="
          bg-[#202225]
          w-full
          max-w-sm
          rounded-lg
          p-4
          md:p-6
          text-white
          relative
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE ICON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          <FiX className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* ICON */}
        <div className="flex justify-center mb-3">
          <div className="bg-red-600/20 p-3 rounded-full">
            <FiTrash2 className="text-red-500 w-6 h-6 md:w-7 md:h-7" />
          </div>
        </div>

        {/* TEXT */}
        <h3 className="text-base md:text-lg font-semibold text-center mb-2">
          Hapus Film
        </h3>
        <p className="text-xs md:text-sm text-gray-300 text-center mb-5">
          Yakin ingin menghapus film ini? Tindakan ini tidak bisa dibatalkan.
        </p>

        {/* ACTION */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="text-sm md:text-base text-gray-300 hover:underline"
          >
            Batal
          </button>
          <button
            onClick={onConfirm}
            className="
              bg-red-600
              hover:bg-red-700
              text-sm
              md:text-base
              px-4
              py-2
              rounded
            "
          >
            Hapus
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
